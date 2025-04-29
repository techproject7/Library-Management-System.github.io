// Data storage
let books = [];
let users = [];
let transactions = [];
let currentUser = null;
const MAX_BOOKS_PER_STUDENT = 3;

// Sample IT books data
const sampleITBooks = [
    // Python Books
    {
        id: 1,
        title: "Python Crash Course",
        author: "Eric Matthes",
        isbn: "9781593276034",
        department: "it",
        totalQuantity: 6,
        available: 6,
        coverColor: "#306998" // Python blue
    },
    {
        id: 2,
        title: "Learning Python",
        author: "Mark Lutz",
        isbn: "9781449355739",
        department: "it",
        totalQuantity: 4,
        available: 4,
        coverColor: "#306998" // Python blue
    },
    {
        id: 3,
        title: "Python for Data Analysis",
        author: "Wes McKinney",
        isbn: "9781491957660",
        department: "it",
        totalQuantity: 5,
        available: 5,
        coverColor: "#306998" // Python blue
    },

    // Java Books
    {
        id: 4,
        title: "Effective Java",
        author: "Joshua Bloch",
        isbn: "9780134685991",
        department: "it",
        totalQuantity: 3,
        available: 3,
        coverColor: "#5382A1" // Java blue
    },
    {
        id: 5,
        title: "Head First Java",
        author: "Kathy Sierra & Bert Bates",
        isbn: "9780596009205",
        department: "it",
        totalQuantity: 4,
        available: 4,
        coverColor: "#5382A1" // Java blue
    },
    {
        id: 6,
        title: "Java: The Complete Reference",
        author: "Herbert Schildt",
        isbn: "9781260440232",
        department: "it",
        totalQuantity: 3,
        available: 3,
        coverColor: "#5382A1" // Java blue
    },

    // C/C++ Books
    {
        id: 7,
        title: "The C Programming Language",
        author: "Brian W. Kernighan & Dennis M. Ritchie",
        isbn: "9780131103627",
        department: "it",
        totalQuantity: 5,
        available: 5,
        coverColor: "#A8B9CC" // C light blue
    },
    {
        id: 8,
        title: "C Programming Absolute Beginner's Guide",
        author: "Greg Perry & Dean Miller",
        isbn: "9780789751980",
        department: "it",
        totalQuantity: 4,
        available: 4,
        coverColor: "#A8B9CC" // C light blue
    },
    {
        id: 9,
        title: "C++ Primer",
        author: "Stanley B. Lippman",
        isbn: "9780321714114",
        department: "it",
        totalQuantity: 3,
        available: 3,
        coverColor: "#00599C" // C++ blue
    },
    {
        id: 10,
        title: "Effective Modern C++",
        author: "Scott Meyers",
        isbn: "9781491903995",
        department: "it",
        totalQuantity: 2,
        available: 2,
        coverColor: "#00599C" // C++ blue
    },

    // HTML/CSS Books
    {
        id: 11,
        title: "HTML and CSS: Design and Build Websites",
        author: "Jon Duckett",
        isbn: "9781118008188",
        department: "it",
        totalQuantity: 6,
        available: 6,
        coverColor: "#E34C26" // HTML orange
    },
    {
        id: 12,
        title: "CSS: The Definitive Guide",
        author: "Eric A. Meyer & Estelle Weyl",
        isbn: "9781449393199",
        department: "it",
        totalQuantity: 4,
        available: 4,
        coverColor: "#264DE4" // CSS blue
    },
    {
        id: 13,
        title: "Responsive Web Design with HTML5 and CSS",
        author: "Ben Frain",
        isbn: "9781839211560",
        department: "it",
        totalQuantity: 3,
        available: 3,
        coverColor: "#E34C26" // HTML orange
    },

    // JavaScript Books
    {
        id: 14,
        title: "JavaScript: The Good Parts",
        author: "Douglas Crockford",
        isbn: "9780596517748",
        department: "it",
        totalQuantity: 5,
        available: 5,
        coverColor: "#F7DF1E" // JavaScript yellow
    },
    {
        id: 15,
        title: "Eloquent JavaScript",
        author: "Marijn Haverbeke",
        isbn: "9781593279509",
        department: "it",
        totalQuantity: 4,
        available: 4,
        coverColor: "#F7DF1E" // JavaScript yellow
    },

    // Software Engineering Books
    {
        id: 16,
        title: "Clean Code: A Handbook of Agile Software Craftsmanship",
        author: "Robert C. Martin",
        isbn: "9780132350884",
        department: "it",
        totalQuantity: 3,
        available: 3,
        coverColor: "#3C873A" // Node.js green
    },
    {
        id: 17,
        title: "Design Patterns: Elements of Reusable Object-Oriented Software",
        author: "Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides",
        isbn: "9780201633610",
        department: "it",
        totalQuantity: 2,
        available: 2,
        coverColor: "#3C873A" // Node.js green
    },

    // Database Books
    {
        id: 18,
        title: "SQL Cookbook",
        author: "Anthony Molinaro",
        isbn: "9780596009762",
        department: "it",
        totalQuantity: 3,
        available: 3,
        coverColor: "#336791" // PostgreSQL blue
    },
    {
        id: 19,
        title: "MongoDB: The Definitive Guide",
        author: "Shannon Bradshaw & Kristina Chodorow",
        isbn: "9781491954461",
        department: "it",
        totalQuantity: 2,
        available: 2,
        coverColor: "#4DB33D" // MongoDB green
    },

    // Algorithms
    {
        id: 20,
        title: "Introduction to Algorithms",
        author: "Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, Clifford Stein",
        isbn: "9780262033848",
        department: "it",
        totalQuantity: 4,
        available: 4,
        coverColor: "#3C873A" // Green
    }
];

// Additional IT books (continuing from id 21)
const additionalITBooks = [
    // Python Fundamentals
    {
        id: 21,
        title: "Python Fundamentals",
        author: "David Beazley",
        isbn: "9781491919538",
        department: "it",
        totalQuantity: 5,
        available: 5,
        coverColor: "#306998" // Python blue
    },
    {
        id: 22,
        title: "Fluent Python",
        author: "Luciano Ramalho",
        isbn: "9781491946008",
        department: "it",
        totalQuantity: 3,
        available: 3,
        coverColor: "#306998" // Python blue
    },

    // Java Fundamentals
    {
        id: 23,
        title: "Java Fundamentals",
        author: "Cay S. Horstmann",
        isbn: "9780134177304",
        department: "it",
        totalQuantity: 4,
        available: 4,
        coverColor: "#5382A1" // Java blue
    },
    {
        id: 24,
        title: "Java: A Beginner's Guide",
        author: "Herbert Schildt",
        isbn: "9781260440218",
        department: "it",
        totalQuantity: 3,
        available: 3,
        coverColor: "#5382A1" // Java blue
    },

    // HTML/CSS Fundamentals
    {
        id: 25,
        title: "HTML5 Fundamentals",
        author: "Mark Pilgrim",
        isbn: "9780596806026",
        department: "it",
        totalQuantity: 5,
        available: 5,
        coverColor: "#E34C26" // HTML orange
    },
    {
        id: 26,
        title: "CSS Fundamentals",
        author: "Eric A. Meyer",
        isbn: "9781449325947",
        department: "it",
        totalQuantity: 4,
        available: 4,
        coverColor: "#264DE4" // CSS blue
    },

    // .NET and C#
    {
        id: 27,
        title: "C# Fundamentals",
        author: "Andrew Troelsen",
        isbn: "9781484257173",
        department: "it",
        totalQuantity: 3,
        available: 3,
        coverColor: "#68217A" // C# purple
    },
    {
        id: 28,
        title: ".NET Core in Action",
        author: "Dustin Metzgar",
        isbn: "9781617294273",
        department: "it",
        totalQuantity: 2,
        available: 2,
        coverColor: "#512BD4" // .NET purple
    },
    {
        id: 29,
        title: "Pro C# 9 with .NET 5",
        author: "Andrew Troelsen & Philip Japikse",
        isbn: "9781484269381",
        department: "it",
        totalQuantity: 3,
        available: 3,
        coverColor: "#68217A" // C# purple
    },

    // Web Development
    {
        id: 30,
        title: "Web Development Fundamentals",
        author: "Jennifer Robbins",
        isbn: "9781491960196",
        department: "it",
        totalQuantity: 4,
        available: 4,
        coverColor: "#E34C26" // HTML orange
    },
    {
        id: 31,
        title: "Full Stack Development with MEAN",
        author: "Joe Casabona",
        isbn: "9781788835534",
        department: "it",
        totalQuantity: 2,
        available: 2,
        coverColor: "#68A063" // Node.js green
    },

    // JavaScript Frameworks
    {
        id: 32,
        title: "React.js Fundamentals",
        author: "Azat Mardan",
        isbn: "9781492045328",
        department: "it",
        totalQuantity: 3,
        available: 3,
        coverColor: "#61DAFB" // React blue
    },
    {
        id: 33,
        title: "Angular Fundamentals",
        author: "Deborah Kurata",
        isbn: "9781484223871",
        department: "it",
        totalQuantity: 2,
        available: 2,
        coverColor: "#DD0031" // Angular red
    },

    // Mobile Development
    {
        id: 34,
        title: "Android Programming",
        author: "Bill Phillips & Chris Stewart",
        isbn: "9780134706054",
        department: "it",
        totalQuantity: 3,
        available: 3,
        coverColor: "#3DDC84" // Android green
    },
    {
        id: 35,
        title: "iOS Programming",
        author: "Christian Keur & Aaron Hillegass",
        isbn: "9780134682334",
        department: "it",
        totalQuantity: 2,
        available: 2,
        coverColor: "#007AFF" // iOS blue
    },

    // Data Science
    {
        id: 36,
        title: "Data Science Fundamentals",
        author: "John D. Kelleher & Brendan Tierney",
        isbn: "9780262535434",
        department: "it",
        totalQuantity: 3,
        available: 3,
        coverColor: "#F29111" // Jupyter orange
    },
    {
        id: 37,
        title: "Machine Learning Fundamentals",
        author: "Aurélien Géron",
        isbn: "9781492032649",
        department: "it",
        totalQuantity: 2,
        available: 2,
        coverColor: "#FF6F00" // TensorFlow orange
    },

    // Cloud Computing
    {
        id: 38,
        title: "AWS Fundamentals",
        author: "Michael Wittig & Andreas Wittig",
        isbn: "9781617295119",
        department: "it",
        totalQuantity: 3,
        available: 3,
        coverColor: "#FF9900" // AWS orange
    },
    {
        id: 39,
        title: "Azure Fundamentals",
        author: "Jim Cheshire",
        isbn: "9781509304677",
        department: "it",
        totalQuantity: 2,
        available: 2,
        coverColor: "#0089D6" // Azure blue
    },

    // DevOps
    {
        id: 40,
        title: "DevOps Fundamentals",
        author: "Jennifer Davis & Ryn Daniels",
        isbn: "9781491954461",
        department: "it",
        totalQuantity: 3,
        available: 3,
        coverColor: "#EE0000" // Red Hat red
    }
];

// Sample books for other departments
const sampleOtherBooks = [
    {
        id: 101,
        title: "The Feynman Lectures on Physics",
        author: "Richard P. Feynman",
        isbn: "9780465023820",
        department: "science",
        totalQuantity: 3,
        available: 3,
        coverColor: "#FF5722"
    },
    {
        id: 102,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        isbn: "9780061120084",
        department: "literature",
        totalQuantity: 4,
        available: 4,
        coverColor: "#9C27B0"
    },
    {
        id: 103,
        title: "Principles of Economics",
        author: "N. Gregory Mankiw",
        isbn: "9781305585126",
        department: "business",
        totalQuantity: 2,
        available: 2,
        coverColor: "#4CAF50"
    }
];

// Department information
const departmentInfo = {
    it: {
        title: "Information Technology",
        description: "Our IT department houses a comprehensive collection of books covering programming languages, software development, networking, cybersecurity, and more. Whether you're a beginner or an advanced programmer, you'll find resources to enhance your skills.",
        featuredBooks: [1, 4, 7, 9, 11, 14, 21, 23, 25, 26, 27, 28] // Featured books from various technologies
    },
    science: {
        title: "Science",
        description: "The Science department offers books on physics, chemistry, biology, astronomy, and other scientific disciplines. From textbooks to popular science works, our collection caters to students and enthusiasts alike.",
        featuredBooks: [6]
    },
    literature: {
        title: "Literature",
        description: "Explore our Literature department for classic and contemporary fiction, poetry, drama, and literary criticism. Our collection spans various genres and periods, offering something for every reader.",
        featuredBooks: [7]
    },
    business: {
        title: "Business",
        description: "The Business department provides resources on management, marketing, finance, economics, and entrepreneurship. Whether you're studying business or looking to enhance your professional skills, you'll find valuable materials here.",
        featuredBooks: [8]
    }
};

// Load data from localStorage if available
function loadData() {
    if (localStorage.getItem('libraryBooks')) {
        books = JSON.parse(localStorage.getItem('libraryBooks'));
    } else {
        // Initialize with sample books if no data exists
        books = [...sampleITBooks, ...additionalITBooks, ...sampleOtherBooks];
        saveData();
    }

    if (localStorage.getItem('libraryUsers')) {
        users = JSON.parse(localStorage.getItem('libraryUsers'));
    }

    if (localStorage.getItem('libraryTransactions')) {
        transactions = JSON.parse(localStorage.getItem('libraryTransactions'));
        // Convert string dates back to Date objects
        transactions.forEach(transaction => {
            transaction.borrowDate = new Date(transaction.borrowDate);
            if (transaction.returnDate) {
                transaction.returnDate = new Date(transaction.returnDate);
            }
        });
    }

    if (localStorage.getItem('currentUser')) {
        currentUser = JSON.parse(localStorage.getItem('currentUser'));
        setupUserInterface();
    }
}

// Save data to localStorage
function saveData() {
    localStorage.setItem('libraryBooks', JSON.stringify(books));
    localStorage.setItem('libraryUsers', JSON.stringify(users));
    localStorage.setItem('libraryTransactions', JSON.stringify(transactions));
    if (currentUser) {
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
    } else {
        localStorage.removeItem('currentUser');
    }
}

// Public section navigation
function showPublicSection(sectionId) {
    document.querySelectorAll('.public-section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');

    // Hide auth and user sections
    document.querySelectorAll('.auth-section, .user-section').forEach(section => {
        section.classList.remove('active');
    });

    // Update active link in top navigation
    document.querySelectorAll('.top-nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('onclick') === `showPublicSection('${sectionId}')`) {
            link.classList.add('active');
        }
    });
}

// Show department details
function showPublicDepartment(departmentId) {
    const dept = departmentInfo[departmentId];
    if (!dept) return;

    const departmentTitle = document.getElementById('departmentTitle');
    const departmentContent = document.getElementById('departmentContent');

    departmentTitle.textContent = dept.title;

    let featuredBooksHTML = '';
    dept.featuredBooks.forEach(bookId => {
        const book = books.find(b => b.id === bookId);
        if (book) {
            featuredBooksHTML += `
                <div class="featured-book">
                    <div class="book-cover" style="background-color: ${book.coverColor || '#3498db'}">
                        <i class="fas fa-book"></i>
                    </div>
                    <div class="book-info">
                        <h4>${book.title}</h4>
                        <p>${book.author}</p>
                    </div>
                </div>
            `;
        }
    });

    departmentContent.innerHTML = `
        <p>${dept.description}</p>
        <h4>Featured Books</h4>
        <div class="featured-books">
            ${featuredBooksHTML}
        </div>
    `;

    document.getElementById('departmentDetails').style.display = 'block';
}

function hideDepartmentDetails() {
    document.getElementById('departmentDetails').style.display = 'none';
}

// Mobile menu toggle
function toggleMobileMenu() {
    const topNavLinks = document.getElementById('topNavLinks');
    topNavLinks.classList.toggle('active');
}

// Show/Hide sections
function showSection(sectionId) {
    // Hide all sections first
    document.querySelectorAll('section').forEach(section => {
        section.classList.remove('active');
    });

    // Show the selected section
    document.getElementById(sectionId).classList.add('active');

    // If it's a login/register section, show it and hide the header
    if (sectionId === 'login' || sectionId === 'register') {
        document.getElementById('loggedInHeader').style.display = 'none';
        // Hide public sections
        document.querySelectorAll('.public-section').forEach(section => {
            section.classList.remove('active');
        });
    }

    // If user is logged in, update active button in navigation
    if (currentUser) {
        document.querySelectorAll('nav button').forEach(button => {
            button.classList.remove('active');
            if (button.getAttribute('data-section') === sectionId) {
                button.classList.add('active');
            }
        });
    }
}

// Toggle student ID field visibility based on role selection
function toggleStudentIdField() {
    const role = document.getElementById('registerRole').value;
    const studentIdField = document.getElementById('registerStudentId');

    if (role === 'student') {
        studentIdField.style.display = 'block';
        studentIdField.required = true;
    } else {
        studentIdField.style.display = 'none';
        studentIdField.required = false;
    }
}

// Authentication
document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('registerUsername').value;
    const role = document.getElementById('registerRole').value;
    const studentId = document.getElementById('registerStudentId').value;

    // Check if username already exists
    if (users.some(user => user.username === username)) {
        alert('Username already exists. Please choose another one.');
        return;
    }

    // Check if student ID already exists (for students)
    if (role === 'student' && !studentId) {
        alert('Student ID is required for student accounts.');
        return;
    }

    if (role === 'student' && users.some(user => user.studentId === studentId)) {
        alert('Student ID already exists. Please check your ID.');
        return;
    }

    const user = {
        id: Date.now(),
        name: document.getElementById('registerName').value,
        username: username,
        email: document.getElementById('registerEmail').value,
        password: document.getElementById('registerPassword').value,
        role: role,
        studentId: role === 'student' ? studentId : null,
        registrationDate: new Date()
    };

    users.push(user);
    saveData();
    alert('Registration successful! You can now login.');
    this.reset();
    showSection('login');
});

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const usernameOrId = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    // Try to find user by username or student ID
    let user = users.find(u =>
        (u.username === usernameOrId || u.studentId === usernameOrId) &&
        u.password === password
    );

    if (user) {
        currentUser = user;
        saveData();
        setupUserInterface();

        // Hide public sections and top navbar links
        document.querySelectorAll('.public-section').forEach(section => {
            section.classList.remove('active');
        });

        // Show appropriate dashboard based on role
        if (user.role === 'admin') {
            showSection('adminDashboard');
        } else {
            showSection('studentDashboard');

            // Update student dashboard info
            document.getElementById('studentName').textContent = user.name;
            document.getElementById('studentIdDisplay').textContent = user.studentId || '-';

            const borrowedCount = transactions.filter(t =>
                t.userId === user.id && !t.returnDate
            ).length;

            document.getElementById('studentBorrowedCount').textContent = borrowedCount;
        }
    } else {
        alert('Invalid username/student ID or password');
    }
});

function logout() {
    currentUser = null;
    localStorage.removeItem('currentUser');

    // Reset UI
    document.getElementById('userInfo').innerHTML = '';
    document.getElementById('mainNav').style.display = 'none';
    document.getElementById('mainNav').innerHTML = '';
    document.getElementById('loggedInHeader').style.display = 'none';

    // Show home section and reset top navbar
    showPublicSection('home');
}

function setupUserInterface() {
    // Show logged in header
    document.getElementById('loggedInHeader').style.display = 'block';

    // Setup user info
    const userInfo = document.getElementById('userInfo');
    userInfo.innerHTML = `
        <div class="user-details">
            <span>Welcome, ${currentUser.name}</span>
            <span class="user-role">${currentUser.role}</span>
        </div>
        <button class="logout-btn" onclick="logout()">Logout</button>
    `;

    // Setup navigation based on user role
    const mainNav = document.getElementById('mainNav');
    mainNav.style.display = 'flex';

    if (currentUser.role === 'admin') {
        mainNav.innerHTML = `
            <button data-section="adminDashboard" onclick="showSection('adminDashboard')">Dashboard</button>
            <button data-section="books" onclick="showSection('books')">Books</button>
            <button data-section="members" onclick="showSection('members')">Students</button>
            <button data-section="transactions" onclick="showSection('transactions')">Transactions</button>
            <button data-section="profile" onclick="showSection('profile')">My Profile</button>
        `;

        // Show admin-only elements
        document.getElementById('adminBookControls').style.display = 'block';
        document.getElementById('adminStudentIdContainer').style.display = 'flex';
    } else {
        mainNav.innerHTML = `
            <button data-section="studentDashboard" onclick="showSection('studentDashboard')">Dashboard</button>
            <button data-section="books" onclick="showSection('books')">Books</button>
            <button data-section="myBooks" onclick="showSection('myBooks')">My Books</button>
            <button data-section="profile" onclick="showSection('profile')">My Profile</button>
        `;

        // Hide admin-only elements
        document.getElementById('adminBookControls').style.display = 'none';
        document.getElementById('adminStudentIdContainer').style.display = 'none';
    }

    // Setup filter buttons event listeners
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            filterBooks(this.getAttribute('data-department'));
        });
    });

    // Setup student verification
    document.getElementById('verifyStudentBtn').addEventListener('click', verifyStudent);

    // Update all data displays
    updateDashboardStats();
    updateBooksList();
    updateMembersList();
    updateTransactionsList();
    updateMyBooksList();
    updateProfileInfo();
    updateBookSelect();
}

// Dashboard
function updateDashboardStats() {
    document.getElementById('totalBooks').textContent = books.length;
    document.getElementById('availableBooks').textContent = books.filter(book => book.available > 0).length;
    document.getElementById('totalMembers').textContent = users.filter(user => user.role === 'student').length;
    document.getElementById('activeBorrowings').textContent = transactions.filter(t => !t.returnDate).length;
}

// Filter books by department
function filterBooks(department) {
    const booksList = document.getElementById('booksList');
    booksList.innerHTML = '';

    let filteredBooks = books;
    if (department !== 'all') {
        filteredBooks = books.filter(book => book.department === department);
    }

    if (filteredBooks.length === 0) {
        booksList.innerHTML = '<p class="no-books">No books found in this department.</p>';
        return;
    }

    filteredBooks.forEach(book => {
        const bookCard = document.createElement('div');
        bookCard.className = 'book-card';

        // Determine book cover color
        const coverColor = book.coverColor || getDepartmentColor(book.department);

        let actionsHtml = '';
        if (currentUser.role === 'admin') {
            actionsHtml = `
                <button class="edit-btn" onclick="showEditBookForm(${book.id})"><i class="fas fa-edit"></i> Edit</button>
                <button class="delete-btn" onclick="confirmDeleteBook(${book.id})"><i class="fas fa-trash"></i> Delete</button>
            `;
        } else if (currentUser.role === 'student' && book.available > 0) {
            // Check if student can borrow more books
            const borrowedCount = transactions.filter(t =>
                t.userId === currentUser.id && !t.returnDate
            ).length;

            if (borrowedCount < MAX_BOOKS_PER_STUDENT) {
                actionsHtml = `<button class="borrow-btn" onclick="borrowBook(${book.id})"><i class="fas fa-book-reader"></i> Borrow</button>`;
            } else {
                actionsHtml = `<button disabled title="You've reached your borrowing limit"><i class="fas fa-ban"></i> Borrow</button>`;
            }
        }

        bookCard.innerHTML = `
            <div class="book-cover" style="background-color: ${coverColor}">
                <i class="fas fa-book"></i>
            </div>
            <div class="book-info">
                <div class="book-title">${book.title}</div>
                <div class="book-author">${book.author}</div>
                <div class="book-details">
                    <p>ISBN: ${book.isbn}</p>
                    <p>Department: ${getDepartmentName(book.department)}</p>
                    <p>Available: ${book.available} / ${book.totalQuantity}</p>
                </div>
            </div>
            <div class="book-actions">
                ${actionsHtml}
            </div>
        `;

        booksList.appendChild(bookCard);
    });
}

// Get department name from code
function getDepartmentName(deptCode) {
    const depts = {
        'it': 'Information Technology',
        'science': 'Science',
        'literature': 'Literature',
        'business': 'Business'
    };
    return depts[deptCode] || 'General';
}

// Get color for department
function getDepartmentColor(deptCode) {
    const colors = {
        'it': '#3498db',
        'science': '#FF5722',
        'literature': '#9C27B0',
        'business': '#4CAF50'
    };
    return colors[deptCode] || '#3498db';
}

// Verify student by ID
function verifyStudent() {
    const studentId = document.getElementById('studentIdInput').value.trim();
    if (!studentId) {
        alert('Please enter a student ID');
        return;
    }

    const student = users.find(u => u.role === 'student' && u.studentId === studentId);

    if (student) {
        // Count borrowed books
        const borrowedCount = transactions.filter(t =>
            t.userId === student.id && !t.returnDate
        ).length;

        // Get currently borrowed books
        const borrowedBooks = transactions.filter(t =>
            t.userId === student.id && !t.returnDate
        ).map(t => {
            const book = books.find(b => b.id === t.bookId);
            return book ? book.title : 'Unknown book';
        });

        // Display student info
        const studentInfoDisplay = document.getElementById('studentInfoDisplay');

        let borrowedBooksHtml = '';
        if (borrowedBooks.length > 0) {
            borrowedBooksHtml = `
                <div class="borrowed-books">
                    <p><strong>Currently borrowed books:</strong></p>
                    <ul>
                        ${borrowedBooks.map(title => `<li>${title}</li>`).join('')}
                    </ul>
                </div>
            `;
        }

        studentInfoDisplay.innerHTML = `
            <div class="verified-student">
                <h4><i class="fas fa-user-check"></i> Student Verified</h4>
                <div class="student-verified-info">
                    <p><strong>Name:</strong> ${student.name}</p>
                    <p><strong>Student ID:</strong> ${student.studentId}</p>
                    <p><strong>Email:</strong> ${student.email}</p>
                    <p><strong>Books borrowed:</strong> <span class="${borrowedCount >= MAX_BOOKS_PER_STUDENT ? 'warning' : ''}">${borrowedCount} / ${MAX_BOOKS_PER_STUDENT}</span></p>
                    ${borrowedCount >= MAX_BOOKS_PER_STUDENT ?
                        '<p class="warning"><i class="fas fa-exclamation-triangle"></i> This student has reached their borrowing limit.</p>' : ''}
                </div>
                ${borrowedBooksHtml}
            </div>
        `;
        studentInfoDisplay.style.display = 'block';

        // Store verified student ID in a hidden field for form submission
        if (!document.getElementById('verifiedStudentId')) {
            const hiddenField = document.createElement('input');
            hiddenField.type = 'hidden';
            hiddenField.id = 'verifiedStudentId';
            hiddenField.value = student.id;
            document.getElementById('borrowForm').appendChild(hiddenField);
        } else {
            document.getElementById('verifiedStudentId').value = student.id;
        }

        // Disable the verify button and student ID input
        document.getElementById('verifyStudentBtn').disabled = true;
        document.getElementById('studentIdInput').disabled = true;

        // Add a reset button
        if (!document.getElementById('resetVerificationBtn')) {
            const resetBtn = document.createElement('button');
            resetBtn.type = 'button';
            resetBtn.id = 'resetVerificationBtn';
            resetBtn.className = 'reset-btn';
            resetBtn.innerHTML = '<i class="fas fa-undo"></i> Reset';
            resetBtn.onclick = resetStudentVerification;
            document.getElementById('adminStudentIdContainer').appendChild(resetBtn);
        }
    } else {
        alert('Student ID not found. Please check and try again.');
    }
}

// Reset student verification
function resetStudentVerification() {
    // Reset the student info display
    document.getElementById('studentInfoDisplay').style.display = 'none';

    // Enable the verify button and student ID input
    document.getElementById('verifyStudentBtn').disabled = false;
    document.getElementById('studentIdInput').disabled = false;
    document.getElementById('studentIdInput').value = '';

    // Remove the reset button
    const resetBtn = document.getElementById('resetVerificationBtn');
    if (resetBtn) {
        resetBtn.remove();
    }

    // Remove the verified student ID
    const verifiedStudentId = document.getElementById('verifiedStudentId');
    if (verifiedStudentId) {
        verifiedStudentId.remove();
    }
}

// Search students
function searchStudents() {
    const searchTerm = document.getElementById('studentSearch').value.toLowerCase();
    const membersList = document.getElementById('membersList');
    membersList.innerHTML = '';

    // Filter students based on search term
    const filteredStudents = users.filter(user =>
        user.role === 'student' &&
        (user.name.toLowerCase().includes(searchTerm) ||
         user.studentId?.toLowerCase().includes(searchTerm))
    );

    if (filteredStudents.length === 0) {
        membersList.innerHTML = '<p>No students found matching your search.</p>';
        return;
    }

    filteredStudents.forEach(student => {
        // Count borrowed books
        const borrowedBooks = transactions.filter(t =>
            t.userId === student.id && !t.returnDate
        ).length;

        const div = document.createElement('div');
        div.className = 'list-item student-card';
        div.innerHTML = `
            <div class="student-info">
                <div class="student-header">
                    <div class="student-avatar">
                        <i class="fas fa-user-graduate"></i>
                    </div>
                    <div class="student-main-info">
                        <h4>${student.name}</h4>
                        <div class="student-id-badge">ID: ${student.studentId || 'N/A'}</div>
                    </div>
                </div>
                <div class="student-details">
                    <p><strong>Username:</strong> ${student.username}</p>
                    <p><strong>Email:</strong> ${student.email}</p>
                    <p><strong>Books borrowed:</strong> ${borrowedBooks} / ${MAX_BOOKS_PER_STUDENT}</p>
                    <p><strong>Registration date:</strong> ${new Date(student.registrationDate).toLocaleDateString()}</p>
                </div>
            </div>
            <div class="student-actions">
                <button onclick="deleteUser(${student.id})"><i class="fas fa-trash"></i> Delete</button>
                <button class="view-books-btn" onclick="viewStudentBooks(${student.id})"><i class="fas fa-book"></i> View Books</button>
            </div>
        `;
        membersList.appendChild(div);
    });
}

// View books borrowed by a specific student
function viewStudentBooks(studentId) {
    const student = users.find(u => u.id === studentId);
    if (!student) return;

    // Get student's active borrowings
    const studentBorrowings = transactions.filter(t =>
        t.userId === studentId && !t.returnDate
    );

    let message = '';

    if (studentBorrowings.length === 0) {
        message = `${student.name} (ID: ${student.studentId}) has not borrowed any books.`;
    } else {
        message = `${student.name} (ID: ${student.studentId}) has borrowed the following books:\n\n`;

        studentBorrowings.forEach((borrowing, index) => {
            const book = books.find(b => b.id === borrowing.bookId);
            if (book) {
                message += `${index + 1}. "${book.title}" by ${book.author}\n`;
                message += `   Borrowed on: ${borrowing.borrowDate.toLocaleDateString()}\n\n`;
            }
        });
    }

    alert(message);
}

// Book Management
document.getElementById('addBookForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const quantity = parseInt(document.getElementById('bookQuantity').value);
    const book = {
        id: Date.now(),
        title: document.getElementById('bookTitle').value,
        author: document.getElementById('bookAuthor').value,
        isbn: document.getElementById('bookISBN').value,
        department: document.getElementById('bookDepartment').value,
        totalQuantity: quantity,
        available: quantity,
        coverColor: getDepartmentColor(document.getElementById('bookDepartment').value)
    };
    books.push(book);
    saveData();
    updateBooksList();
    updateBookSelect();
    updateDashboardStats();
    this.reset();

    // Show success message
    alert(`Book "${book.title}" has been added to the ${getDepartmentName(book.department)} department.`);
});

function updateBooksList() {
    // Default to showing all books
    filterBooks('all');
}

// Show edit book form
function showEditBookForm(bookId) {
    const book = books.find(b => b.id === bookId);
    if (!book) {
        alert('Book not found');
        return;
    }

    // Hide add book section and show edit book section
    document.getElementById('addBookSection').style.display = 'none';
    document.getElementById('editBookSection').style.display = 'block';

    // Populate form with book data
    document.getElementById('editBookId').value = book.id;
    document.getElementById('editBookTitle').value = book.title;
    document.getElementById('editBookAuthor').value = book.author;
    document.getElementById('editBookISBN').value = book.isbn;
    document.getElementById('editBookDepartment').value = book.department;
    document.getElementById('editBookTotalQuantity').value = book.totalQuantity;
    document.getElementById('editBookAvailable').value = book.available;

    // Scroll to the edit form
    document.getElementById('editBookSection').scrollIntoView({ behavior: 'smooth' });
}

// Hide edit book form
function hideEditBookForm() {
    // Show add book section and hide edit book section
    document.getElementById('addBookSection').style.display = 'block';
    document.getElementById('editBookSection').style.display = 'none';
}

// Edit book form submission
document.getElementById('editBookForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const bookId = parseInt(document.getElementById('editBookId').value);
    const totalQuantity = parseInt(document.getElementById('editBookTotalQuantity').value);
    const available = parseInt(document.getElementById('editBookAvailable').value);

    // Validate available copies
    if (available > totalQuantity) {
        alert('Available copies cannot be more than total quantity');
        return;
    }

    // Find the book
    const bookIndex = books.findIndex(b => b.id === bookId);
    if (bookIndex === -1) {
        alert('Book not found');
        return;
    }

    // Check if any copies are currently borrowed
    const borrowedCopies = books[bookIndex].totalQuantity - books[bookIndex].available;
    if (totalQuantity < borrowedCopies) {
        alert(`Cannot reduce total quantity below ${borrowedCopies} as ${borrowedCopies} copies are currently borrowed.`);
        return;
    }

    // Update book data
    books[bookIndex] = {
        ...books[bookIndex],
        title: document.getElementById('editBookTitle').value,
        author: document.getElementById('editBookAuthor').value,
        isbn: document.getElementById('editBookISBN').value,
        department: document.getElementById('editBookDepartment').value,
        totalQuantity: totalQuantity,
        available: available,
        coverColor: getDepartmentColor(document.getElementById('editBookDepartment').value)
    };

    // Save data and update UI
    saveData();
    updateBooksList();
    updateBookSelect();
    updateDashboardStats();

    // Hide edit form
    hideEditBookForm();

    // Show success message
    alert(`Book "${books[bookIndex].title}" has been updated successfully.`);
});

// Modal functions
function showModal(id) {
    document.getElementById(id).style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent scrolling
}

function closeModal() {
    document.querySelectorAll('.modal').forEach(modal => {
        modal.style.display = 'none';
    });
    document.body.style.overflow = 'auto'; // Enable scrolling
}

// Close modal when clicking outside the modal content
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        closeModal();
    }
};

// Confirm delete book
function confirmDeleteBook(id) {
    const book = books.find(b => b.id === id);
    if (!book) return;

    // Set up the delete modal
    document.getElementById('deleteModalMessage').innerHTML = `
        Are you sure you want to delete <strong>"${book.title}"</strong> by ${book.author}?<br><br>
        This action cannot be undone.
    `;

    // Set up the confirm button
    const confirmBtn = document.getElementById('confirmDeleteBtn');
    confirmBtn.onclick = function() {
        deleteBook(id);
        closeModal();
    };

    // Show the modal
    showModal('deleteModal');
}

// Delete book
function deleteBook(id) {
    // Check if any copies are currently borrowed
    const hasBorrowedCopies = transactions.some(t =>
        t.bookId === id && !t.returnDate
    );

    if (hasBorrowedCopies) {
        alert('Cannot delete book. Some copies are currently borrowed.');
        return;
    }

    const bookTitle = books.find(b => b.id === id)?.title || 'Book';
    books = books.filter(book => book.id !== id);
    saveData();
    updateBooksList();
    updateBookSelect();
    updateDashboardStats();

    // Show success message
    alert(`"${bookTitle}" has been deleted successfully.`);
}

// User Management
function updateMembersList() {
    if (currentUser && currentUser.role === 'admin') {
        const membersList = document.getElementById('membersList');
        membersList.innerHTML = '';

        // Show only student users
        const students = users.filter(user => user.role === 'student');

        if (students.length === 0) {
            membersList.innerHTML = '<p>No students registered yet.</p>';
            return;
        }

        students.forEach(student => {
            // Count borrowed books
            const borrowedBooks = transactions.filter(t =>
                t.userId === student.id && !t.returnDate
            ).length;

            const div = document.createElement('div');
            div.className = 'list-item student-card';
            div.innerHTML = `
                <div class="student-info">
                    <div class="student-header">
                        <div class="student-avatar">
                            <i class="fas fa-user-graduate"></i>
                        </div>
                        <div class="student-main-info">
                            <h4>${student.name}</h4>
                            <div class="student-id-badge">ID: ${student.studentId || 'N/A'}</div>
                        </div>
                    </div>
                    <div class="student-details">
                        <p><strong>Username:</strong> ${student.username}</p>
                        <p><strong>Email:</strong> ${student.email}</p>
                        <p><strong>Books borrowed:</strong> ${borrowedBooks} / ${MAX_BOOKS_PER_STUDENT}</p>
                        <p><strong>Registration date:</strong> ${new Date(student.registrationDate).toLocaleDateString()}</p>
                    </div>
                </div>
                <div class="student-actions">
                    <button onclick="deleteUser(${student.id})"><i class="fas fa-trash"></i> Delete</button>
                    <button class="view-books-btn" onclick="viewStudentBooks(${student.id})"><i class="fas fa-book"></i> View Books</button>
                </div>
            `;
            membersList.appendChild(div);
        });
    }
}

function deleteUser(id) {
    // Check if user has any borrowed books
    const hasBorrowedBooks = transactions.some(t =>
        t.userId === id && !t.returnDate
    );

    if (hasBorrowedBooks) {
        alert('Cannot delete user. They have books that need to be returned first.');
        return;
    }

    users = users.filter(user => user.id !== id);
    saveData();
    updateMembersList();
    updateMemberSelect();
    updateDashboardStats();
}

// Transaction Management
function updateBookSelect() {
    const bookSelect = document.getElementById('bookSelect');
    bookSelect.innerHTML = '<option value="">Select Book</option>';

    // Group books by department
    const departments = {
        'it': 'Information Technology',
        'science': 'Science',
        'literature': 'Literature',
        'business': 'Business'
    };

    // Create optgroups for each department
    for (const [deptCode, deptName] of Object.entries(departments)) {
        const deptBooks = books.filter(book => book.department === deptCode && book.available > 0);

        if (deptBooks.length > 0) {
            const optgroup = document.createElement('optgroup');
            optgroup.label = deptName;

            deptBooks.forEach(book => {
                const option = document.createElement('option');
                option.value = book.id;
                option.textContent = `${book.title} by ${book.author} (${book.available} available)`;
                optgroup.appendChild(option);
            });

            bookSelect.appendChild(optgroup);
        }
    }
}

function updateMemberSelect() {
    if (currentUser && currentUser.role === 'admin') {
        const memberSelect = document.getElementById('memberSelect');
        memberSelect.innerHTML = '<option value="">Select Student</option>';

        // Only show students who haven't reached their borrowing limit
        const students = users.filter(user => user.role === 'student');

        students.forEach(student => {
            const borrowedCount = transactions.filter(t =>
                t.userId === student.id && !t.returnDate
            ).length;

            if (borrowedCount < MAX_BOOKS_PER_STUDENT) {
                memberSelect.innerHTML += `<option value="${student.id}">${student.name} (${borrowedCount}/${MAX_BOOKS_PER_STUDENT})</option>`;
            }
        });
    }
}

document.getElementById('borrowForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const bookId = parseInt(document.getElementById('bookSelect').value);
    let userId;

    if (currentUser.role === 'admin') {
        // Get verified student ID
        const verifiedStudentId = document.getElementById('verifiedStudentId');
        if (!verifiedStudentId || !verifiedStudentId.value) {
            alert('Please verify a student ID first');
            return;
        }
        userId = parseInt(verifiedStudentId.value);
    } else {
        userId = currentUser.id;
    }

    // Check if user has reached their borrowing limit
    const borrowedCount = transactions.filter(t =>
        t.userId === userId && !t.returnDate
    ).length;

    if (borrowedCount >= MAX_BOOKS_PER_STUDENT) {
        alert('This student has reached their borrowing limit');
        return;
    }

    const book = books.find(b => b.id === bookId);
    if (!book) {
        alert('Please select a book');
        return;
    }

    if (book.available <= 0) {
        alert('This book is not available for borrowing');
        return;
    }

    const transaction = {
        id: Date.now(),
        bookId: bookId,
        userId: userId,
        borrowDate: new Date(),
        returnDate: null
    };

    // Update book availability
    book.available--;

    transactions.push(transaction);
    saveData();
    updateTransactionsList();
    updateBooksList();
    updateBookSelect();
    updateMyBooksList();
    updateMembersList();
    updateDashboardStats();

    // Reset form and student verification display
    this.reset();
    if (currentUser.role === 'admin') {
        document.getElementById('studentInfoDisplay').style.display = 'none';
    }

    // Show success message
    const student = users.find(u => u.id === userId);
    alert(`Book "${book.title}" has been successfully issued to ${student.name} (ID: ${student.studentId || 'N/A'}).`);
});

function updateTransactionsList() {
    const transactionsList = document.getElementById('transactionsList');
    transactionsList.innerHTML = '';

    let filteredTransactions;

    if (currentUser.role === 'admin') {
        // Admins see all active transactions
        filteredTransactions = transactions.filter(t => !t.returnDate);
    } else {
        // Students see only their own transactions
        filteredTransactions = transactions.filter(t =>
            t.userId === currentUser.id && !t.returnDate
        );
    }

    filteredTransactions.forEach(transaction => {
        const book = books.find(b => b.id === transaction.bookId);
        const user = users.find(u => u.id === transaction.userId);

        const div = document.createElement('div');
        div.className = 'list-item';
        div.innerHTML = `
            <div>
                <strong>${book.title}</strong>
                <br>
                ${currentUser.role === 'admin' ? `Borrowed by: ${user.name}<br>` : ''}
                Date: ${transaction.borrowDate.toLocaleDateString()}
            </div>
            <button onclick="returnBook(${transaction.id}, ${book.id})">Return</button>
        `;
        transactionsList.appendChild(div);
    });
}

function returnBook(transactionId, bookId) {
    const transaction = transactions.find(t => t.id === transactionId);
    transaction.returnDate = new Date();

    const book = books.find(b => b.id === bookId);
    book.available++;

    saveData();
    updateTransactionsList();
    updateBooksList();
    updateBookSelect();
    updateMyBooksList();
    updateMembersList();
    updateDashboardStats();
}

// Student-specific functions
function borrowBook(bookId) {
    // Check if student has reached their borrowing limit
    const borrowedCount = transactions.filter(t =>
        t.userId === currentUser.id && !t.returnDate
    ).length;

    if (borrowedCount >= MAX_BOOKS_PER_STUDENT) {
        alert('You have reached your borrowing limit');
        return;
    }

    const book = books.find(b => b.id === bookId);
    if (book.available <= 0) {
        alert('This book is not available for borrowing');
        return;
    }

    const transaction = {
        id: Date.now(),
        bookId: bookId,
        userId: currentUser.id,
        borrowDate: new Date(),
        returnDate: null
    };

    // Update book availability
    book.available--;

    transactions.push(transaction);
    saveData();
    updateBooksList();
    updateMyBooksList();
    updateDashboardStats();

    alert(`You have successfully borrowed "${book.title}"`);
}

function updateMyBooksList() {
    if (currentUser && currentUser.role === 'student') {
        const myBooksList = document.getElementById('myBooksList');
        myBooksList.innerHTML = '';

        // Get current user's active borrowings
        const myBorrowings = transactions.filter(t =>
            t.userId === currentUser.id && !t.returnDate
        );

        if (myBorrowings.length === 0) {
            myBooksList.innerHTML = '<p>You have not borrowed any books yet.</p>';
            return;
        }

        myBorrowings.forEach(transaction => {
            const book = books.find(b => b.id === transaction.bookId);

            const div = document.createElement('div');
            div.className = 'list-item';
            div.innerHTML = `
                <div>
                    <strong>${book.title}</strong> by ${book.author}
                    <br>
                    Borrowed on: ${transaction.borrowDate.toLocaleDateString()}
                </div>
                <button onclick="returnBook(${transaction.id}, ${book.id})">Return</button>
            `;
            myBooksList.appendChild(div);
        });

        // Update borrowed count
        document.getElementById('borrowedCount').textContent = myBorrowings.length;
    }
}

// Profile
function updateProfileInfo() {
    if (currentUser) {
        const profileInfo = document.getElementById('profileInfo');

        // Count borrowed books for students
        let borrowedBooks = 0;
        if (currentUser.role === 'student') {
            borrowedBooks = transactions.filter(t =>
                t.userId === currentUser.id && !t.returnDate
            ).length;
        }

        profileInfo.innerHTML = `
            <div class="info-row">
                <div class="info-label">Name:</div>
                <div>${currentUser.name}</div>
            </div>
            <div class="info-row">
                <div class="info-label">Username:</div>
                <div>${currentUser.username}</div>
            </div>
            <div class="info-row">
                <div class="info-label">Email:</div>
                <div>${currentUser.email}</div>
            </div>
            <div class="info-row">
                <div class="info-label">Role:</div>
                <div>${currentUser.role}</div>
            </div>
            <div class="info-row">
                <div class="info-label">Joined:</div>
                <div>${new Date(currentUser.registrationDate).toLocaleDateString()}</div>
            </div>
            ${currentUser.role === 'student' ? `
            <div class="info-row">
                <div class="info-label">Books Borrowed:</div>
                <div>${borrowedBooks} / ${MAX_BOOKS_PER_STUDENT}</div>
            </div>
            ` : ''}
        `;
    }
}

// Initial setup
loadData();
if (!currentUser) {
    // Show home page by default for new visitors
    showPublicSection('home');

    // Setup event listeners for public sections
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            filterBooks(this.getAttribute('data-department'));
        });
    });

    // Setup student ID field toggle
    document.getElementById('registerRole').addEventListener('change', toggleStudentIdField);

    // Setup mobile menu
    document.querySelector('.hamburger').addEventListener('click', toggleMobileMenu);
}