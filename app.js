// UI and LS objects
ui = new UI();
ls = new LS();

// event elements
const form = document.querySelector('form');
const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const isbnInput = document.querySelector('#isbn')

// taskList X click event
const bookData = document.querySelector('tbody');
bookData.addEventListener('click', delBook);

// page reload
document.addEventListener('DOMContentLoaded', getBooks);

//form submit event
form.addEventListener('submit', addBook);

function addBook(e) {
	// new object Book with input values
	const book = new Book(titleInput.value, authorInput.value, isbnInput.value);
	// add book value to the visual by UI
	ui.addBook(book);
	// add book value to the LS
	ls.addBook(book);
	e.preventDefault();
}

function delBook(e) {
	// get book name
	let book = e.target.parentElement.parentElement;
	// delete book value from visual by UI object
	ui.delBook(book);
	// change book element content before deleting from LS
	book = book.firstChild.textContent;
	// delete book value from LS by LS object 
	ls.delBook(book);
}

function getBooks(e) {
	// get books from LS by this name
	books = ls.getData('books');
	// create task list by UI
	ui.getBooks(books);
}