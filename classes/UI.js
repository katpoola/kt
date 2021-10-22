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
		const title = this.addUIelement('th', 'book-title', book.title);
		const author = this.addUIelement('th', 'book-author', book.author);
		const isbn = this.addUIelement('th', 'book-isbn', book.isbn);
		// create X
		const link = this.addUIelement('a', 'the-x', 'X', {'href':'#'});
		// add X to book 
		const delX = this.addUIelement('th', 'delBtn', link);
		// find table to add the book item
		const tableBody = document.querySelector('table');
		// new row at the end of the table
		var row = tableBody.insertRow();
		// new cell at the end of the row
		var cell = row.insertCell();
		// text node to the cell
		cell.appendChild(delX);
		// find input to clear this value
		const inputTitle = document.querySelector('#title');
		const inputAuthor = document.querySelector('#author');
		const inputISBN = document.querySelector('#isbn');
		inputTitle.value = '';
		inputAuthor.value = '';
		inputISBN.value = '';
		// log to condole
		book.addedToUI();
	}

	delBook(book) {
		const delIcon = book.nextSibling;
		if (delIcon.textContent == "X") {
			if (confirm('Do you want to delete this book?')) {
				book.parentElement.remove();
			}
		}
	}

	getBooks(books) {
		for (let i = 0; i < books.length; i++) {
			// create items
			const title = this.addUIelement('th', 'book-title', books[i].title);
			const author = this.addUIelement('th', 'book-author', books[i].author);
			const isbn = this.addUIelement('th', 'book-isbn', books[i].isbn);
			// add X to book 
			const delX = this.addUIelement('th', 'delBtn', link);
			// find table to add the book item
			const tableBody = document.querySelector('table');
			// new row at the end of the table
			var row = tableBody.insertRow();
			// new cell at the end of the row
			var cell = row.insertCell();
			// text node to the cell
			cell.appendChild(delX);
			// find table body to add created book item
			const tableBody = document.querySelector('tbody');
			tableBody.appendChild(book);
		}
	}
}