import React, { Component } from 'react'

class Book extends Component {

    /*
		@description handleChange Handles book's bookshelf change
		@param bookId {string} Unique string for books
		@param e {string} The bookshelf
	 */
	handleChange = (bookId, e) => {
		const shelf = e.target.value
		if (this.props.onUpdateBookshelf)
			this.props.onUpdateBookshelf(bookId, shelf)
	}

    render () {
        return (
            <ol className="books-grid">
                {/* Show only those books that meet our criteria */}
                {this.props.books.filter((book) => book.shelf === 'currentlyReading').map((book) => (
                    <li key={book.id}>
                        <div className="book">
                            <div className="book-top">
                                <div className="book-cover" style={{
                                        width: 128,
                                        height: 193,
                                        backgroundImage: `url(${book.imageLinks.smallThumbnail})`
                                    }}>
                                </div>
                                {/* ./book-cover */}
                                <div className="book-shelf-changer">
                                    <select value={book.shelf} onChange={this.handleChange.bind(this, book)}>
                                        <option value="none" disabled="disabled">Move to...</option>
                                        <option value="currentlyReading">Currently Reading</option>
                                        <option value="wantToRead">Want to Read</option>
                                        <option value="read">Read</option>
                                        <option value="none">None</option>
                                    </select>
                                </div>
                                {/* ./book-shelf-changer */}
                            </div>
                            {/* ./book-top */}
                            <div className="book-title">{book.title}</div>
                            {book.authors.map((author) => (
                                <div key={author} className="book-authors">{author}</div>))
                            }
                        </div>
                        {/* ./book */}
                    </li>))
                }
                {/* ./books.filter.map */}
            </ol>
            // ./books-grid
        )
    }
}

export default Book
