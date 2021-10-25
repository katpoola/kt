class LS {
	// get and set data at LS
	getData(book) {
		let data;
		if (localStorage.getItem(book) === null) {
			data = [];
		} else {
			data = JSON.parse(localStorage.getItem(book));
		}
		return data;
	}

	setData(book, data) {
		localStorage.setItem(book, JSON.stringify(data));
	}

	addBook(book) {
		// set data to the LS
		let books = this.getData('books');
		books.push(book);
		this.setData('books', books);
		// log to console
		book.addedToLS();
	}

	delBook(book) {
		let books = this.getData('books');
		books.forEach(function(booksElement, booksIndex) {
			if (booksElement.title === book) {
				books.splice(booksIndex, 1);
			}
		});
		this.setData('books', books);
	}
}