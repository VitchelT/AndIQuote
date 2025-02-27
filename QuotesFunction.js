/// Firebase configuration
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

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// Retrieve selectedAuthor and authorQuotes from localStorage
const selectedAuthor = localStorage.getItem('selectedAuthor');
const authorQuotes = JSON.parse(localStorage.getItem('authorQuotes')); // Assuming authorQuotes is stored as a JSON array

// Check if the necessary data is available
if (!selectedAuthor || !authorQuotes) {
    console.error('selectedAuthor or authorQuotes not found in localStorage.');
    alert('Author or quotes data not found. Please try again.');
} else {
    // Log the selected author and quotes for verification
    console.log('Selected Author:', selectedAuthor);
    console.log('Quotes:', authorQuotes);

    // Reference to the container where the quotes will be displayed
    const gridContainer = document.querySelector('.quote-grid');

    // Clear the grid container in case there was any previous content
    gridContainer.innerHTML = '';

    // Define the stringToImage function
    function stringToImage(text) {
        // Create a canvas element
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');

        // Set canvas dimensions
        canvas.width = 350; // Adjust width according to the content
        canvas.height = 350; // Adjust height accordingly

        // Define the styling for the container box
        const padding = 20;
        const boxWidth = canvas.width - 2 * padding;
        const boxHeight = canvas.height - 2 * padding;
        const borderRadius = 33;

        // Draw the black box with a yellow border
        context.fillStyle = 'black';
        context.strokeStyle = 'rgba(245, 231, 28, .668)';
        context.lineWidth = 5;
        // Draw the black box with rounded edges and a shadow
        context.shadowColor = 'rgba(0, 0, 0, 0.668)';
        context.shadowBlur = 4;
         context.shadowOffsetX = -4;
        
        
        drawRoundedRect(context, padding, padding, boxWidth, boxHeight, borderRadius);
        

        // Create a rounded rectangle for the black container with border
        drawRoundedRect(context, padding, padding, boxWidth, boxHeight, borderRadius);
        context.fill();
        context.stroke();

        // Set initial text styling
        let fontSize = 26;
        context.font = `${fontSize}px sans-serif`;
        context.fillStyle = 'white';
        context.textAlign = 'center';
        context.textBaseline = 'middle';
        context.imageSmoothingQuality = 'high';

        // Prepare the text for line breaks
        let lines = wrapText(context, text, boxWidth, fontSize);
        
        // If text is too long, reduce the font size until it fits
        while (lines.length * fontSize > boxHeight) {
            fontSize -= 2;
            context.font = `${fontSize}px sans-serif`;
            lines = wrapText(context, text, boxWidth, fontSize);
        }

        // Draw the text (centered and justified)
        const textX = canvas.width / 2;
        const lineHeight = fontSize * 1.1; // Adjust the line height accordingly
        const startY = (canvas.height - lines.length * lineHeight) / 1.7;

        lines.forEach((line, index) => {
            const lineY = startY + index * lineHeight;
            context.fillText(line, textX, lineY, boxWidth);
        });

        // Return the canvas element to be appended to the DOM
        return canvas;
    }

    // Helper function to wrap text into multiple lines
    function wrapText(context, text, maxWidth, fontSize) {
        const words = text.split(' ');
        let line = '';
        let lines = [];

        for (let i = 0; i < words.length; i++) {
            const testLine = line + words[i] + ' ';
            const testWidth = context.measureText(testLine).width;
            if (testWidth > maxWidth) {
                lines.push(line.trim());
                line = words[i] + ' ';
            } else {
                line = testLine;
            }
        }
        lines.push(line.trim());

        return lines;
    }

    // Helper function to draw a rounded rectangle
    function drawRoundedRect(ctx, x, y, width, height, radius) {
        ctx.beginPath();
        ctx.moveTo(x + radius, y);
        ctx.lineTo(x + width - radius, y);
        ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
        ctx.lineTo(x + width, y + height - radius);
        ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
        ctx.lineTo(x + radius, y + height);
        ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
        ctx.lineTo(x, y + radius);
        ctx.quadraticCurveTo(x, y, x + radius, y);
        ctx.closePath();
    }

    // Create div elements for each quote in the array and display the canvas image
    authorQuotes.forEach((quoteObj, index) => {
        const div = document.createElement('div');
        div.className = 'quote-item';

        // Check if the quote is an object with a "Value" key, or just a string
        const quoteText = typeof quoteObj === 'object' && quoteObj.Value ? quoteObj.Value : quoteObj;

        // Create a block element for the number (above the quote)
        const numberDiv = document.createElement('div');
        numberDiv.className = 'quote-number';
        numberDiv.textContent = `${index + 1}`; // Display just the number

        // Style the numberDiv as a block with some formatting (optional)
        numberDiv.style.fontSize = '24px';
        numberDiv.style.fontWeight = 'bold';
        numberDiv.style.textAlign = 'center';
        numberDiv.style.marginBottom = '-50px'; // Add some space between the number and the quote
        numberDiv.style.color = 'white';

        // Create canvas with the quote text
        const canvas = stringToImage(`"${quoteText}"`);
        div.appendChild(numberDiv);
        div.appendChild(canvas);

        // Event listener for selecting a quote
        div.addEventListener('click', () => {
            const quoteImage = canvas.toDataURL(); // Convert canvas to base64 image
            localStorage.setItem('selectedQuote', quoteImage); // Store the image data URL in localStorage
            localStorage.setItem('selectedAuthor', selectedAuthor); // Store the selectedAuthor
            localStorage.setItem('selectedQuotes', JSON.stringify(authorQuotes)); // Store full authorQuotes array

            // Save the index of the selected quote
            const postCommentHere = index;
            localStorage.setItem('postCommentHere', postCommentHere);

            // Log the index of the selected quote
            console.log(`Selected Quote Index: ${postCommentHere}`);

            console.log('Quote stored successfully.'); // Log success message
            window.location.href = 'SelectedQuoteView.html'; // Redirect to the quote view page
        });

        // Append the div to the grid container
        gridContainer.appendChild(div);
    });
}

// Function that replaces Title with the current author
function thisIsTheCurrentAuthor() {
    const selectedAuthor = localStorage.getItem('selectedAuthor');
    const logoElement = document.querySelector('.logo');
    if (selectedAuthor && logoElement) {
        logoElement.textContent = selectedAuthor;
    }
}

window.addEventListener('load', thisIsTheCurrentAuthor);


function goBack() {
    // Navigate back to the previous screen (index.html)
    window.location.href = '../MainScreen/index.html';
}
