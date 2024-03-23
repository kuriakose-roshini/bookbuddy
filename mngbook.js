const bookForm = document.getElementById('book-form');
const booksContainer = document.getElementById('books-container');
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const bookIdInput = document.getElementById('book-id');

let books = [];

function saveBookToStorage() {
    localStorage.setItem('books', JSON.stringify(books));
}

function loadBooksFromStorage() {
    books = JSON.parse(localStorage.getItem('books')) || [];
    renderBooks();
}

function renderBooks() {
    booksContainer.innerHTML = '';
    books.forEach((book, index) => {
        const bookItem = document.createElement('div');
        bookItem.className = 'book-item';
        bookItem.innerHTML = `
            <h3>${book.title} by ${book.author}</h3>
            <button onclick="editBook(${index})">Edit</button>
            <button onclick="deleteBook(${index})">Delete</button>
        `;
        booksContainer.appendChild(bookItem);
    });
}

function addBook(event) {
    event.preventDefault();
    const book = {
        title: titleInput.value,
        author: authorInput.value
    };
    books.push(book);
    saveBookToStorage();
    titleInput.value = '';
    authorInput.value = '';
    renderBooks();
}

function editBook(index) {
    bookIdInput.value = index;
    titleInput.value = books[index].title;
    authorInput.value = books[index].author;
}

function updateBook(index) {
    books[index].title = titleInput.value;
    books[index].author = authorInput.value;
    saveBookToStorage();
    titleInput.value = '';
    authorInput.value = '';
    bookIdInput.value = '';
    renderBooks();
}

function deleteBook(index) {
    books.splice(index, 1);
    saveBookToStorage();
    renderBooks();
}
