// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBtkZ-xLzWUT-pr9k1qqB1PrGcc0M-SrsQ",
    authDomain: "andiquote-e50f4.firebaseapp.com",
    databaseURL: "https://andiquote-e50f4-default-rtdb.firebaseio.com",
    projectId: "andiquote-e50f4",
    storageBucket: "andiquote-e50f4.appspot.com",
    messagingSenderId: "567940788769",
    appId: "1:567940788769:web:f5e3e438a43fb6aebda960",
    measurementId: "G-KZ6Q7JPH9G"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

document.addEventListener('DOMContentLoaded', () => {
    const selectedQuote = localStorage.getItem('selectedQuote');
    const selectedAuthor = localStorage.getItem('selectedAuthor');
    const postCommentHere = localStorage.getItem('postCommentHere');
    const quoteImageElement = document.getElementById('selectedQuoteImage');
    const quoteTextElement = document.getElementById('selectedQuoteText');

    // Dynamically display author's name in pageTitle
    const pageTitle = document.getElementById('pageTitle');
    pageTitle.textContent = selectedAuthor || 'Author Unknown';

    // Display the quote (image or text)
    if (selectedQuote) {
        if (selectedQuote.startsWith('data:image') || selectedQuote.endsWith('.jpg') || selectedQuote.endsWith('.png')) {
            quoteImageElement.src = selectedQuote;
            quoteImageElement.style.display = 'block';
        } else {
            quoteTextElement.textContent = selectedQuote;
            quoteTextElement.style.display = 'block';
        }
    } else {
        console.error('Selected quote not found in localStorage.');
        return;
    }

    // Retrieve the Author from Firebase
    const authorRef = database.ref('Authors').orderByChild('name').equalTo(selectedAuthor);

    authorRef.once('value', (snapshot) => {
        if (snapshot.exists()) {
            snapshot.forEach((childSnapshot) => {
                const authorKey = childSnapshot.key;
                const quotes = childSnapshot.val().Quotes || {};

                if (postCommentHere !== null && quotes[postCommentHere]) {
                    const commentsRef = database.ref(`Authors/${authorKey}/Quotes/${postCommentHere}/Comments`);

                    // Load existing comments for the specific quote index
                    commentsRef.on('value', (commentsSnapshot) => {
                        const commentsContainer = document.querySelector('.leave-comment-container');
                        commentsContainer.innerHTML = ''; // Clear previous comments
                        const comments = commentsSnapshot.val() || {};

                        Object.keys(comments).forEach((commentKey) => {
                            const commentObj = comments[commentKey];

                            // Create a container for the comment
                            const commentDiv = document.createElement('div');
                            commentDiv.classList.add('comment');
                            commentDiv.textContent = commentObj.text;

                            // Add the heart image
                            const heartWrapper = document.createElement('div');
                            heartWrapper.classList.add('heart-wrapper');
                            heartWrapper.style.position = 'absolute';
                            heartWrapper.style.left = '0.1rem';

                            const heartImg = document.createElement('img');
                            heartImg.src = './Heart.png';
                            heartImg.alt = 'Heart';
                            heartImg.style.width = '20px';
                            heartImg.style.height = '20px';
                            heartImg.style.cursor = 'pointer';
                            heartImg.style.filter = 'invert(21%) sepia(77%) saturate(5958%) hue-rotate(354deg) brightness(96%) contrast(94%)';

                            const heartCount = document.createElement('sup');
                            heartCount.textContent = commentObj.hearts || 0;
                            heartCount.classList.add('heart-count');
                            heartCount.style.marginLeft = '0px';

                            // Increment heart count on double-tap or click
                            heartImg.addEventListener('dblclick', () => {
                                incrementHeartCount(commentsRef, commentKey, heartCount);
                            });

                            heartImg.addEventListener('click', () => {
                                incrementHeartCount(commentsRef, commentKey, heartCount);
                            });

                            heartWrapper.appendChild(heartImg);
                            heartWrapper.appendChild(heartCount);
                            commentDiv.appendChild(heartWrapper);

                            // Add the Reply button
                            const replyButton = document.createElement('button');
                            replyButton.classList.add('reply-button');
                            replyButton.textContent = 'Reply';
                            replyButton.style.color = 'grey';
                            replyButton.style.border = 'none';
                            replyButton.style.background = 'none';
                            replyButton.style.marginLeft = '10px';
                            replyButton.style.cursor = 'pointer';

                            // Add a reply event listener
                            replyButton.addEventListener('click', () => {
                                const replyText = prompt('Enter your reply:');
                                if (replyText) {
                                    const repliesRef = commentsRef.child(`${commentKey}/Replies`);
                                    const newReplyRef = repliesRef.push();
                                    newReplyRef.set({
                                        text: replyText,
                                    }).then(() => {
                                        console.log('Reply added successfully.');
                                    });
                                }
                            });

                            // Append the Reply button to the comment
                            commentDiv.appendChild(replyButton);

                            // Add replies dynamically
                            const repliesContainer = document.createElement('div');
                            repliesContainer.classList.add('replies-container');
                            repliesContainer.style.marginLeft = '20px';

                            commentsRef.child(`${commentKey}/Replies`).on('value', (repliesSnapshot) => {
                                const replies = repliesSnapshot.val() || {};
                                repliesContainer.innerHTML = ''; // Clear previous replies

                                Object.keys(replies).forEach((replyKey) => {
                                    const replyObj = replies[replyKey];

                                    // Create a reply element
                                    const replyDiv = document.createElement('div');
                                    replyDiv.classList.add('reply');
                                    replyDiv.textContent = replyObj.text;
                                    replyDiv.style.marginBottom = '5px';

                                    repliesContainer.appendChild(replyDiv);
                                });
                            });

                            // Append the replies container
                            commentDiv.appendChild(repliesContainer);

                            // Append the comment to the comments container
                            commentsContainer.appendChild(commentDiv);
                        });
                    });

                    // Add a default comment submission logic
                    const submitButton = document.getElementById('submit-button');
                    submitButton.addEventListener('click', () => {
                        const commentBox = document.querySelector('textarea');
                        const commentText = commentBox.value.trim();

                        if (commentText) {
                            const newCommentRef = commentsRef.push();
                            newCommentRef.set({
                                text: commentText,
                                hearts: 0, // Initialize with zero hearts
                                Replies: {}, // Initialize empty Replies
                            }).then(() => {
                                console.log('Comment added successfully.');
                                commentBox.value = '';
                            });
                        } else {
                            alert('Please enter a comment before submitting.');
                        }
                    });
                } else {
                    console.error('Quote not found in the database.');
                }
            });
        } else {
            console.error(`No author found with the name ${selectedAuthor}`);
        }
    }).catch((error) => {
        console.error('Error fetching author:', error);
    });
});

function incrementHeartCount(commentsRef, commentKey, heartCountElement) {
    const heartRef = commentsRef.child(`${commentKey}/hearts`);
    heartRef.transaction((currentHearts) => {
        return (currentHearts || 0) + 1; // Increment the count in Firebase
    }).then(() => {
        console.log('Heart count incremented.');
        heartCountElement.textContent = parseInt(heartCountElement.textContent) + 1; // Update the count displayed on the page
    }).catch((error) => {
        console.error('Error incrementing heart count:', error);
    });
}

function goBack() {
    // Navigate back to the previous screen (index.html)
    window.history.back();
}

function goBack() {
    // Navigate back to the previous screen (index.html)
    window.location.href = '../PersonScreen/AllQuotes.html';
    console.log('Moved Back');
}
