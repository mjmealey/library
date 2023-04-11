const addBook = document.getElementById("addBook");
const bookForm = document.getElementById("bookForm");
const bookName = document.getElementById("bookName");
const bookAuthor = document.getElementById("bookAuthor");
const bookPub = document.getElementById("bookPub");
const bookPages = document.getElementById("bookPages");
const completed = document.getElementById("completed");
const stillReading = document.getElementById("stillReading");
const notStarted = document.getElementById("notStarted");
const submitButton = document.getElementById("submitButton");
const bookCatalog = document.getElementById("bookCatalog");

const library = [];

const createBook = {
  title: "",
  author: "",
  year: null,
  pages: null,
  read: false,
};

addBook.addEventListener("click", (e) => {
  if (e.target.id === "addBook") {
        bookForm.style.display = "block";
        document.body.classList.add("backgroundFade")
    }
});

bookName.addEventListener("input", (e) => {
  if (e.target.id === "bookName") {
    if (bookName.value === "") {
      bookName.setCustomValidity("Please enter a book title");
    } else {
      bookName.setCustomValidity("");
    }
  }
});

bookAuthor.addEventListener("input", (e) => {
  if (e.target.id === "bookAuthor") {
    if (bookAuthor.value === "") {
      bookAuthor.setCustomValidity("Please enter an author's name");
    } else {
      bookAuthor.setCustomValidity("");
    }
  }
});

bookPages.addEventListener("input", (e) => {
  if (e.target.id === "bookPages") {
    if (bookPages.value === "") {
      bookPages.setCustomValidity(
        "Please enter a number or if you have not read the book please put 0 pages"
      );
    } else {
      bookPages.setCustomValidity("");
    }
  }
});

function addBookToLibrary() {
  const newBook = Object.create(createBook);
  newBook.title = bookName.value;
  newBook.author = bookAuthor.value;
  newBook.year = bookPub.value;
  newBook.pages = bookPages.value;
  newBook.read = completed.checked;
  library.push(newBook);
  if (bookCatalog > 1) {
    bookCatalog.style.display = "block";
    bookCatalog.style.backgroundColor = "red";
  }
}

function displayBook() {
  bookCatalog.innerHTML = "";
  for (let i = 0; i < library.length; i++) {
    const book = library[i];
    const index = i;

    const li = document.createElement("li");
    li.classList.add("li");
    const title = document.createElement("h1");
    title.classList.add("title");
    title.textContent = book.title;
    const author = document.createElement("h2");
    author.classList.add("author");
    author.textContent = book.author;
    const year = document.createElement("p");
    year.classList.add("year");
    year.textContent = book.year;
    const pages = document.createElement("h2");
    pages.classList.add("pages");
    pages.textContent = book.pages;
    const label = document.createElement("label");
    label.textContent = "Read?";
    label.classList.add("readLabel");
    const read = document.createElement("input");

    read.type = "checkbox";
    read.classList.add("read");
    read.checked = book.read;
    const removeButton = document.createElement("button");
    removeButton.classList.add("removeButton");
    removeButton.textContent = "-";
    removeButton.addEventListener("click", () => {
      if (confirm("Are you sure you want to remove this book?")) {
        library.splice(index, 1);
        displayBook();
      }
    });
    bookCatalog.appendChild(li);
    li.appendChild(title);
    li.appendChild(author);
    li.appendChild(year);
    li.appendChild(pages);
    li.appendChild(label);
    li.appendChild(read);
    li.appendChild(removeButton);
  }
}

bookForm.addEventListener("submit", (e) => {
  if (e.target.id === "bookForm") {
    e.preventDefault();
    addBookToLibrary();
    resetForm();
    displayBook();
    bookCatalog.style.display = "block";
    li.style.backgroundColor = "lightblue";
  }
});

function resetForm() {
  bookForm.reset();
  bookForm.style.display = "none";
}
