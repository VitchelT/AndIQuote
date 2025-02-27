
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

 // Initialize Firebase using compatibility version
 firebase.initializeApp(firebaseConfig);
 const database = firebase.database();




// const names = [
//     "William Shakespeare", "Mark Twain", "George Orwell", "J.K. Rowling", "Ernest Hemingway", 
//     "F. Scott Fitzgerald", "Maya Angelou", "Toni Morrison", "James Baldwin", "Agatha Christie", 
//     "Charles Dickens", "Leo Tolstoy", "Gabriel García Márquez", "Harper Lee", "Franz Kafka", 
//     "Jane Austen", "Virginia Woolf", "Langston Hughes", "Salman Rushdie", "Herman Melville", 
//     "Oscar Wilde", "Emily Dickinson", "J.R.R. Tolkien", "Sylvia Plath", "Margaret Atwood", 
//     "Alice Walker", "Cormac McCarthy", "John Steinbeck", "Wole Soyinka", "Jhumpa Lahiri", 
//     "Khaled Hosseini", "Chinua Achebe", "James Joyce", "Zadie Smith", "Ralph Ellison", 
//     "George R.R. Martin", "Paulo Coelho", "Yann Martel", "Edgar Allan Poe", "Isabel Allende", 
//     "Fyodor Dostoevsky", "Elif Shafak", "Umberto Eco", "Thomas Pynchon", "Richard Wright", 
//     "Kurt Vonnegut", "Don DeLillo", "Eudora Welty", "Ray Bradbury", "Jesus Christ", 
//     "Muhammad", "Gautama Buddha", "Moses", "Pope Francis", "Dalai Lama", 
//     "Joseph Smith", "Mother Teresa", "Desmond Tutu", "Martin Luther", "St. Augustine", 
//     "Guru Nanak", "Saint Teresa of Ávila", "Mahavira", "John Calvin", 
//     "Joan of Arc", "Zoroaster", "Saint Peter", "Rumi", "L. Ron Hubbard", 
//     "Billy Graham", "Swami Vivekananda","Kanye West","Jay Z" ,"Siddhartha Gautama", "Thomas Aquinas", "John Wesley", 
//     "Ignatius of Loyola", "Ayatollah Khomeini", "Mary Baker Eddy", "Huldrych Zwingli", 
//     "Ellen G. White", "Tenzin Gyatso", "Krishna", "Joel Osteen", "Max Lucado", 
//     "Joyce Meyer", "Dietrich Bonhoeffer", "Rabindranath Tagore", "Soren Kierkegaard", "John Knox", 
//     "Guru Gobind Singh", "Saint Catherine of Siena", "Malachi", "Sai Baba", "Francis of Assisi", 
//     "Albert Schweitzer", "Emmet Fox", "Jonathan Edwards", "David Koresh", "Hippocrates", 
//     "Florence Nightingale", "Sigmund Freud", "Jonas Salk", "Louis Pasteur", "Paul Farmer", 
//     "Marie Curie", "Elizabeth Blackwell", "Joseph Lister", "Atul Gawande", "Charles Drew", 
//     "Ben Carson", "Christiaan Barnard", "Virginia Apgar", "Anthony Fauci", "Albert Sabin", 
//     "Patch Adams", "Harvey Cushing", "Helen Brooke Taussig", "Alfred Blalock", "Rudolf Virchow", 
//     "Clara Barton", "Vivien Thomas", "Andreas Vesalius", "Avicenna (Ibn Sina)", "Edward Jenner", 
//     "William Osler", "Gregory House", "Leonardo da Vinci", "Rene Laennec", "Robert Koch", 
//     "William Harvey", "Walter Reed", "Daniel Hale Williams", "Norman Bethune", "Henrietta Lacks", 
//     "Elizabeth Kübler-Ross", "Archibald McIndoe", "Gerty Cori", "Richard Feynman", "Frederick Banting", 
//     "Huda Zoghbi", "Peter Pronovost", "Michael DeBakey", "Christiane Nüsslein-Volhard", "José Baselga", 
//     "David Ho", "David Livingstone", "Robert Liston", "Severo Ochoa", "Marlon Brando", 
//     "Meryl Streep", "Denzel Washington", "Katharine Hepburn", "Robert De Niro", "Audrey Hepburn", 
//     "Leonardo DiCaprio", "Al Pacino", "Tom Hanks", "Viola Davis", "Jack Nicholson", 
//     "Bette Davis", "Sidney Poitier", "Elizabeth Taylor", "Morgan Freeman", "Natalie Portman", 
//     "Humphrey Bogart", "Emma Thompson", "Cary Grant", "Charlize Theron", "Daniel Day-Lewis", 
//     "Mahershala Ali", "Sally Field", "Cate Blanchett", "Will Smith", "Judi Dench", 
//     "Matt Damon", "Joaquin Phoenix", "Kevin Spacey", "Samuel L. Jackson", "Nicole Kidman", 
//     "James Stewart", "Glenn Close", "Christian Bale", "Jodie Foster", "Jamie Foxx", 
//     "Anthony Hopkins", "Angela Bassett", "Benedict Cumberbatch", "Kate Winslet", "Charlton Heston", 
//     "Halle Berry", "Keanu Reeves", "Gal Gadot", "Brad Pitt", "Jared Leto", 
//     "Julia Roberts", "Peter O'Toole", "Michael Caine", "Lupita Nyong'o", "Steven Spielberg", 
//     "Alfred Hitchcock", "Quentin Tarantino", "Martin Scorsese", "Stanley Kubrick", "James Cameron", 
//     "George Lucas", "Francis Ford Coppola", "Christopher Nolan", "Orson Welles", "Ridley Scott", 
//     "Kathryn Bigelow", "Peter Jackson", "Tim Burton", "David Lynch", "Jean-Luc Godard", 
//     "Clint Eastwood", "Wes Anderson", "Paul Thomas Anderson", "Akira Kurosawa", "Spike Lee", 
//     "Sofia Coppola", "Alejandro González Iñárritu", "Ang Lee", "John Ford", "Hayao Miyazaki", 
//     "Robert Zemeckis", "Mel Brooks", "Roman Polanski", "Guy Ritchie", "Ingmar Bergman", 
//     "Sergio Leone", "Frank Capra", "John Huston", "David Fincher", "Darren Aronofsky", 
//     "Billy Wilder", "Zhang Yimou", "Ron Howard", "Werner Herzog", "Pedro Almodóvar", 
//     "Woody Allen", "Michael Mann", "Brian De Palma", "Robert Altman", "Michael Bay", 
//     "Luc Besson", "Terrence Malick", "Richard Linklater", "Bong Joon-ho", "Maria Montessori", 
//     "John Dewey", "Booker T. Washington", "Aristotle", "Plato", "Confucius", 
//     "Anne Sullivan", "Horace Mann", "Jean Piaget", "Paulo Freire", "Friedrich Fröbel", 
//     "Johann Heinrich Pestalozzi", "Mary McLeod Bethune", "Lev Vygotsky", "Thomas Arnold", "Margaret Bancroft", 
//     "Ellen Swallow Richards", "Charles Eliot", "Charlotte Mason", "Neil Postman", "John Holt", 
//     "Diane Ravitch", "Sugata Mitra", "Helen Keller", "Eric Erikson", "Malcolm Knowles", 
//     "Bell Hooks", "Deborah Meier", "Howard Gardner", "Jerome Bruner", "Carol Dweck", 
//     "B.F. Skinner", "Seymour Papert", "Edward Thorndike", "Malcolm X", "Edmund Husserl", 
//     "John Taylor Gatto", "A.S. Neill", "Maxine Greene", "Noam Chomsky", "Catherine Beecher", 
//     "George Counts", "Jacques Barzun", "Sara Lawrence-Lightfoot", "Amos Bronson Alcott", "Carter G. Woodson", 
//     "Johann Friedrich Herbart", "Albert Bandura", "Alan Turing",  "Grace Hopper", 
//     "Ada Lovelace", "Steve Wozniak", "Vint Cerf", "John von Neumann", "Dennis Ritchie", 
//     "Linus Torvalds", "John McCarthy", "Claude Shannon", "Larry Page", "Sergey Brin", 
//     "Mark Zuckerberg", "Elon Musk", "Bill Gates", "Jeff Bezos", "James Gosling", 
//     "Guido van Rossum", "Bjarne Stroustrup", "Donald Knuth", "Richard Stallman", "Robert Metcalfe", 
//     "Yann LeCun", "Geoffrey Hinton", "Fei-Fei Li", "Daphne Koller", "John Carmack", 
//     "Margaret Hamilton", "Brian Kernighan", "Alan Kay", "Whitfield Diffie", "Barbara Liskov", "Albert Einstein", "Isaac Newton", "Nikola Tesla", "Alexander Graham Bell",
// "Thomas Edison", "Stephen Hawking", "Charles Darwin", "Galileo Galilei", "Leonhard Euler", "Johannes Kepler", "Niels Bohr", "Max Planck", "Enrico Fermi", "Werner Heisenberg", "Erwin Schrödinger", "Louis Pasteur", "Rosalind Franklin", "James Watson", "Francis Crick",
// "Dmitri Mendeleev", "Carl Sagan", "Richard Dawkins", "Jane Goodall", "Timothy Berners-Lee", "Neil Armstrong", "Yuri Gagarin", "Buzz Aldrin", "Sally Ride", "Katherine Johnson",
// "Alan Shepard", "John Glenn", "Mae Jemison", "Valentina Tereshkova", "Edwin Hubble",
// "Johannes Gutenberg", "Henry Ford", "Wright Brothers", "Steve Jobs", "Stephen King",
// "George Washington", "Thomas Jefferson", "Abraham Lincoln", "Theodore Roosevelt", "Franklin D. Roosevelt",
// "John F. Kennedy", "Martin Luther King Jr.", "Mahatma Gandhi", "Nelson Mandela", "Winston Churchill",
// "Joseph Stalin", "Vladimir Lenin", "Fidel Castro", "Kim Jong-un", "Vladimir Putin",
// "Barack Obama", "Donald Trump", "Angela Merkel", "Margaret Thatcher", "Indira Gandhi",
// "Charles de Gaulle", "Napoleon Bonaparte", "Julius Caesar", "Alexander the Great", "Cleopatra",
// "Queen Elizabeth II", "Queen Victoria", "Genghis Khan", "Attila the Hun", "Sun Tzu",
// "Vlad the Impaler", "Joan of Arc", "Marco Polo", "Christopher Columbus", "Ferdinand Magellan",
// "Vasco da Gama", "James Cook", "Amerigo Vespucci", "Leif Erikson", "Hernán Cortés",
// "Leon Trotsky", "Che Guevara", "Pol Pot", "Ho Chi Minh", "Benito Mussolini",
// "Marie Antoinette", "Catherine the Great", "Henry VIII", "Queen Mary I", "Ivan the Terrible",
// "Louis XIV", "Philip II of Spain", "Peter the Great", "Constantine the Great", "Justinian I",
// "Charlemagne", "Otto von Bismarck", "Franz Ferdinand", "Kaiser Wilhelm II", "Emperor Meiji",
// "Empress Dowager Cixi", "Shaka Zulu", "Mansa Musa", "Tutankhamun", "Akhenaten",
// "Hatshepsut", "Ramses II", "Nefertiti", "Socrates", "Jean-Jacques Rousseau",
// "Immanuel Kant", "Georg Wilhelm Friedrich Hegel", "David Hume", "John Locke", "Thomas Hobbes",
// "Michel Foucault", "Jacques Derrida", "Jean-Paul Sartre", "René Descartes", 
// "Baruch Spinoza", "Epicurus", "Pythagoras", "Thales of Miletus", "Zeno of Elea",
// "Bertrand Russell", "Gottfried Wilhelm Leibniz", "Karl Marx", "Friedrich Engels", "Simone de Beauvoir",
// "Hannah Arendt", "Ludwig Wittgenstein", "Albert Camus", "Emmanuel Levinas", "Martin Heidegger",
// "Claude Lévi-Strauss", "Max Weber", "Thorstein Veblen", "Emile Durkheim", "Harriet Martineau",
// "George Washington Carver", "W.E.B. Du Bois", "Ida B. Wells", "Frederick Douglass", "Rosa Parks",
// "Malala Yousafzai", "Anne Frank", "Helen Keller", "Greta Thunberg", "Oprah Winfrey",
// "Sheryl Sandberg", "Serena Williams", "Beyoncé", "Tina Turner", "Diana Ross",
// "Bob Dylan", "Elvis Presley", "John Lennon", "Paul McCartney", "Ringo Starr",
// "George Harrison", "Jimi Hendrix", "Freddie Mercury", "David Bowie", "Bob Marley",
// "Whitney Houston", "Michael Jackson", "Prince", "Madonna", "Elton John",
// "Paul Simon", "Bruce Springsteen", "Bono", "Eric Clapton", "Keith Richards",
// "Mick Jagger", "Phil Collins", "Stevie Wonder", "Aretha Franklin", "Patti Smith",
// "Janis Joplin", "Tupac Shakur", "The Notorious B.I.G.", "Eminem", "Dr. Dre",
// "Snoop Dogg", "Kurt Cobain", "Adele", "Taylor Swift", "Lady Gaga",
// "Justin Bieber", "Ed Sheeran", "Shakira", "Rihanna", "Jennifer Lopez",
// "Chris Martin", "Billy Joel", "Barbra Streisand", "Lenny Kravitz", "Steven Tyler",
// "Jon Bon Jovi", "Tom Petty", "James Hetfield", "Bono", "Dolly Parton", "Shaquille O'Neal", "Tim Duncan", "Hakeem Olajuwon", "Karl Malone", "Charles Barkley",
// "David Robinson", "Scottie Pippen", "Patrick Ewing", "Allen Iverson", "Dwyane Wade",
// "John Stockton", "Dirk Nowitzki", "Kevin Garnett", "Paul Pierce", "Jason Kidd",
// "Clyde Drexler", "Steve Nash", "Isiah Thomas", "Reggie Miller", "Dennis Rodman",
// "Chris Paul", "James Harden", "Stephen Curry", "Kevin Durant", "Kareem Abdul-Jabbar",
// "Bill Russell", "Wilt Chamberlain", "Oscar Robertson", "Elgin Baylor", "George Gervin",
// "Zinedine Zidane", "Ronaldo Nazário", "Ronaldinho", "Zlatan Ibrahimović", "Thierry Henry",
// "Paolo Maldini", "Franz Beckenbauer", "Gianluigi Buffon", "Alfredo Di Stéfano", "Eusebio",
// "Xavi", "Andrés Iniesta", "David Beckham", "Roberto Baggio", "Roberto Carlos",
// "Ferenc Puskás", "George Best", "Ruud Gullit", "Marco van Basten", "Johan Neeskens",
// "Lev Yashin", "Michel Platini", "Didier Drogba", "Frank Lampard", "Steven Gerrard",
// "Andrea Pirlo", "Rivaldo", "Sergio Ramos", "Oliver Kahn", "Gerd Müller",
// "Lou Gehrig", "Ty Cobb", "Ted Williams", "Sandy Koufax", "Bob Gibson",
// "Joe DiMaggio", "Randy Johnson", "Nolan Ryan", "Greg Maddux", "Pedro Martínez",
// "Cal Ripken Jr.", "Derek Jeter", "Roberto Clemente", "Ozzie Smith", "Ken Griffey Jr.",
// "Barry Bonds", "Mark McGwire", "Frank Thomas", "Harmon Killebrew", "Yogi Berra",
// "Stan Musial", "Wade Boggs", "Carl Yastrzemski", "Johnny Bench", "Reggie Jackson",
// "Hank Greenberg", "Ernie Banks", "Rod Carew", "Chipper Jones", "Tony Gwynn",
// "Barry Sanders", "Emmitt Smith", "Lawrence Taylor", "Jim Brown", "Brett Favre",
// "Reggie White", "Ray Lewis", "Dan Marino", "Terry Bradshaw", "Deion Sanders",
// "Randy Moss", "Eric Dickerson", "Steve Young", "Roger Staubach", "Tony Gonzalez",
// "Bruce Smith", "Junior Seau", "Aaron Rodgers", "Drew Brees", "Adrian Peterson",
// "Jerry Kramer", "John Elway", "Troy Aikman", "Darrell Green", "Ronnie Lott",
// "O.J. Simpson", "Michael Strahan", "Ladanian Tomlinson", "Marshall Faulk", "Ed Reed",
// "Michael Johnson", "Mo Farah", "Ashton Eaton", "Haile Gebrselassie", "Allyson Felix",
// "Shelly-Ann Fraser-Pryce", "Yohan Blake", "Donovan Bailey", "Marita Koch", "Hicham El Guerrouj",
// "David Rudisha", "Merlene Ottey", "Eliud Kipchoge", "Tirunesh Dibaba", "Gail Devers",
// "Sanya Richards-Ross", "Michael Johnson", "Steve Prefontaine", "Edwin Moses", "Carl Lewis",
// "Wilma Rudolph", "Florence Griffith-Joyner", "Marion Jones", "Bob Beamon", "Kenenisa Bekele",
// "Sebastian Coe", "Sally Pearson", "Jesse Owens", "Jackie Joyner-Kersee", "Daley Thompson",
// "Candace Parker", "Sue Bird", "Maya Moore", "Brittney Griner", "Elena Delle Donne",
// "Tina Thompson", "Becky Hammon", "DeLisha Milton-Jones", "Katie Smith", "Teresa Weatherspoon","Swin Cash", "Lauren Jackson", "Tamika Catchings", "Dawn Staley", "Lisa Leslie",
// "Cheryl Ford", "Sheryl Swoopes", "Cynthia Cooper", "Ticha Penicheiro", "Nneka Ogwumike",
// "Angel McCoughtry", "Sylvia Fowles", "Diana Taurasi", "Briann January", "Skylar Diggins-Smith",
// "Courtney Vandersloot", "A'ja Wilson", "Jonquel Jones", "Kara Lawson", "Renee Montgomery",
// "Tony Stewart", "Bill Elliott", "Darrell Waltrip", "Rusty Wallace", "Dale Jarrett",
// "Mark Martin", "Cale Yarborough", "David Pearson", "Junior Johnson", "Bobby Allison",
// "Kurt Busch", "Kyle Busch", "Carl Edwards", "Matt Kenseth", "Ryan Newman",
// "Chase Elliott", "Brad Keselowski", "Joey Logano", "Kevin Harvick", "Denny Hamlin",
// "Clint Bowyer", "Bobby Labonte", "Jeff Burton", "Sterling Marlin", "Ricky Rudd",
// "Richard Childress", "Terry Labonte", "Ralph Earnhardt", "Tim Richmond", "Jimmie Johnson",
// "Martina Navratilova", "Billie Jean King", "Chris Evert", "Rod Laver", "Bjorn Borg",
// "John McEnroe", "Andre Agassi", "Jimmy Connors", "Ivan Lendl", "Monica Seles",
// "Venus Williams", "Margaret Court", "Ken Rosewall", "Pancho Gonzales", "Stefan Edberg",
// "Boris Becker", "Lleyton Hewitt", "Ilie Năstase", "Gustavo Kuerten", "Goran Ivanišević",
// "Jim Courier", "Pat Rafter", "Stan Smith", "Yannick Noah", "Michael Chang",
// "Serena Williams", "Rafael Nadal", "Roger Federer", "Pete Sampras", "Novak Djokovic",
// "Phil Mickelson", "Arnold Palmer", "Sam Snead", "Gary Player", "Lee Trevino",
// "Bobby Jones", "Walter Hagen", "Tom Watson", "Seve Ballesteros", "Nick Faldo",
// "Ernie Els", "Greg Norman", "Vijay Singh", "Rory McIlroy", "Fred Couples",
// "Davis Love III", "Bernhard Langer", "Nick Price", "Payne Stewart", "Curtis Strange",
// "Justin Rose", "Jordan Spieth", "Brooks Koepka", "Jason Day", "Dustin Johnson",
// "Jack Nicklaus", "Tiger Woods", "Tommy Armour", "Gene Sarazen", "Ben Hogan","Magic Johnson", "Larry Bird", "Julius Erving", "Jerry West", "Bob Cousy",
// "Moses Malone", "John Havlicek", "Rick Barry", "Elvin Hayes", "Walt Frazier",
// "George Mikan", "Dave Cowens", "Nate Thurmond", "David Thompson", "Bill Walton",
// "Gary Payton", "Dominique Wilkins", "Pete Maravich", "Artis Gilmore", "James Worthy",
// "Willis Reed", "Spencer Haywood", "Dikembe Mutombo", "Maurice Cheeks", "Chris Mullin",
// "Alonzo Mourning", "Alex English", "Robert Parish", "Tom Heinsohn", "Sam Jones",
// "Bob Pettit", "Hal Greer", "Billy Cunningham", "Earl Monroe", "Kenny Smith",
// "Grant Hill", "Lenny Wilkens", "Tiny Archibald", "Tracy McGrady", "Ben Wallace",
// "Adrian Dantley", "Jack Sikma", "Chris Bosh", "Paul Arizin", "Gail Goodrich",
// "Bobby Jones", "Ralph Sampson", "Dan Issel", "Nate Archibald", "Bailey Howell",
// "Vlade Divac", "Bernard King", "Dave Bing", "Larry Nance", "Robert Horry",
// "Sidney Moncrief", "Jack Twyman", "Mitch Richmond", "Tom Sanders", "Arnie Risen",
// "Joe Dumars", "Mel Daniels", "Chet Walker", "George Yardley", "Maurice Stokes",
// "Bob Lanier", "Frank Ramsey", "Connie Hawkins", "Dennis Johnson", "Marques Johnson",
// "Rick Mahorn", "Michael Cooper", "Jamaal Wilkes", "Sam Cassell", "Rasheed Wallace",
// "Paul Westphal", "Chris Webber", "Kevin McHale", "Shawn Marion", "Zelmo Beaty",
// "Mark Price", "Reggie Lewis", "Chris Morris", "Dale Ellis", "Toni Kukoc",
// "Vernon Maxwell", "Kiki Vandeweghe", "Brad Daugherty", "Joe Barry Carroll", "Jimmy Jackson",
// "Michael Finley","Michael Jordan","Lebron James","Kobe Bryant", "Wes Unseld", "Jim Jackson", "Chauncey Billups", "Robert Parish",


// "Vitchel Toussaint "
// ];


let selectedIndex = -1; // Track the current selected index

function navigateToAllQuotes(person) {
    const authorsRef = database.ref('Authors');
    authorsRef.orderByChild('name').equalTo(person).once('value', snapshot => {
        if (snapshot.exists()) {
            snapshot.forEach(childSnapshot => {
                const authorData = childSnapshot.val();
                const quotes = authorData.Quotes || [];

                // Store the author's name and quotes in local storage
                localStorage.setItem('selectedAuthor', person);
                localStorage.setItem('authorQuotes', JSON.stringify(quotes));

                // Navigate to the AllQuotes page
                window.location.href = '../PersonScreen/AllQuotes.html';
            });
        } else {
            console.error('Author not found in the database');
        }
    });
}

// Function to filter names and show the dropdown
function filterNames() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const dropdown = document.getElementById("dropdown");
    dropdown.innerHTML = ""; // Clear previous results
    selectedIndex = -1; // Reset selection index

    if (input.length > 0) {
        const authorsRef = database.ref('Authors');
        authorsRef.once('value', snapshot => {
            const authors = [];
            snapshot.forEach(childSnapshot => {
                const author = childSnapshot.val().name;
                
                if (author.toLowerCase().includes(input)) {
                    authors.push(author);
                }
            });

            // Show the dropdown if there are matching results
            if (authors.length > 0) {
                dropdown.style.display = "block";
                authors.forEach((name, index) => {
                    const li = document.createElement("li");
                    li.textContent = name;
                    li.setAttribute("data-index", index);
                    li.onclick = () => {
                        document.getElementById("searchInput").value = name; // Set input value on click
                        dropdown.style.display = "none"; // Hide dropdown after selection
                        navigateToAllQuotes(name); // Navigate to AllQuotes screen for the selected person
                    };
                    dropdown.appendChild(li);
                });
            } else {
                dropdown.style.display = "none"; // Hide dropdown if no results
            }
        });
    } else {
        dropdown.style.display = "none"; // Hide dropdown if input is cleared
    }
}

window.addEventListener('resize', centerElements);

function centerElements() {
    const elements = document.querySelectorAll('.css');
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    elements.forEach(element => {
        const elementWidth = element.offsetWidth;
        const elementHeight = element.offsetHeight;

        // Calculate the center position
        const leftPosition = (screenWidth - elementWidth) / 2;
        const topPosition = (screenHeight - elementHeight) / 2;

        // Apply the calculated positions
        element.style.position = 'absolute'; // Ensure it's absolutely positioned
        element.style.left = `${leftPosition}px`;
        element.style.top = `${topPosition}px`;
    });
}



let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        centerElements();
    }, 100); // Adjust delay to your preference
});