class UI {
	// help function to add DOM element
	addUIelement(elementname, classname = '', textcontent = '', atributes = {}) {
		const element = document.createElement(elementname);
		element.className = classname;
		element.appendChild(document.createTextNode(textcontent));
		// if we want to use atributes, for example an atribute is href with value #
		if (Object.keys(atributes).length > 0) {
			for (let key in atributes) {
				element.setAttribute(key, atributes[key]);
			}
		}
		return element;
	}

	addBook(book) {
		// create title, author and ISBN
		const title = this.addUIelement('td', 'book-title', book.title);
		const author = this.addUIelement('td', 'book-author', book.author);
		const isbn = this.addUIelement('td', 'book-isbn', book.isbn);
		// create X
		const link = this.addUIelement('a', 'secondary-content', 'X', {'href':'#'});
		const delBtn = this.addUIelement('td', 'book-del');
		delBtn.appendChild(link);
		// create row and add the stuff
		const row = document.createElement('tr');
		row.appendChild(title);
		row.appendChild(author);
		row.appendChild(isbn);
		row.appendChild(delBtn);
		// find table and add items
		const tableBody = document.querySelector('tbody');
		tableBody.appendChild(row);
		// find input to clear this value
		const inputTitle = document.querySelector('#title');
		inputTitle.value = '';
		const inputAuthor = document.querySelector('#author');
		inputAuthor.value = '';
		const inputISBN = document.querySelector('#isbn');
		inputISBN.value = '';
		// log to condole
		book.addedToUI();
	}

	delBook(book) {
		const delIcon = book;
		if (delIcon.lastChild.textContent == "X") {
			if (confirm('Do you want to delete this book?')) {
				delIcon.remove();
			}
		}
	}

	getBooks(books) {
		for (let i = 0; i < books.length; i++) {
		// create title, author and ISBN
		const title = this.addUIelement('td', 'book-title', books[i].title);
		const author = this.addUIelement('td', 'book-author', books[i].author);
		const isbn = this.addUIelement('td', 'book-isbn', books[i].isbn);
		// create X
		const link = this.addUIelement('a', 'secondary-content', 'X', {'href':'#'});
		const delBtn = this.addUIelement('td', 'book-del');
		delBtn.appendChild(link);
		// create row and add the stuff
		const row = document.createElement('tr');
		row.appendChild(title);
		row.appendChild(author);
		row.appendChild(isbn);
		row.appendChild(delBtn);
		// find table and add items
		const tableBody = document.querySelector('tbody');
		tableBody.appendChild(row);
		}
	}
}