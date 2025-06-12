"use strict";

const openModalBtn = document.getElementById("open-modal");
const closeModalBtn = document.getElementById("close-modal");
const bookDialog = document.getElementById("book-dialog");
const bookForm = document.getElementById("book-form");
const bookListContainer = document.getElementById("book-list");
class Book {
  constructor(bookName, author, pages, read) {
    this.id = crypto.randomUUID();
    this.bookName = bookName;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

const myLibrary = [];

function addBookToLibrary(e) {
  e.preventDefault();
  const title = e.target.title.value;
  const author = e.target.author.value;
  const pages = e.target.pages.value;
  const read = e.target.read.value;

  const book = new Book(title, author, pages, read);

  myLibrary.push(book);
  console.log(myLibrary);
  renderLibrary(myLibrary);
  bookForm.reset();
  bookDialog.close();
}

function renderLibrary(library) {
  bookListContainer.innerHTML = "";
  library.forEach((book) => {
    const bookDiv = document.createElement("div");
    const headTitle = document.createElement("h3");
    const pAuthor = document.createElement("p");
    const pPages = document.createElement("p");
    const readButton = document.createElement("button");

    headTitle.textContent = book.bookName;
    pAuthor.textContent = book.author;
    pPages.textContent = book.pages;
    readButton.textContent = book.read ? "Read" : "Not read";
    bookDiv.id = book.id;
    bookDiv.classList.add("book-card");
    readButton.classList.add(`card-buttons`);

    bookListContainer.appendChild(bookDiv);
    bookDiv.appendChild(headTitle);
    bookDiv.appendChild(pAuthor);
    bookDiv.appendChild(pPages);
    bookDiv.appendChild(readButton);
  });
}

openModalBtn.addEventListener("click", () => bookDialog.showModal());
closeModalBtn.addEventListener("click", () => bookDialog.close());
bookForm.addEventListener("submit", addBookToLibrary);
