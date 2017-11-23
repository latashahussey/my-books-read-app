import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Book extends Component {

	// Required properties for component
	static = {
		books: PropTypes.array.isRequired,
		bookshelves: PropTypes.array.isRequired,
		onUpdateBookshelf: PropTypes.func.isRequired
	}


	/*
		@description handleShelfChange Handles book's bookshelf change
		@param bookId {string} Unique string for books
		@param e {string} The bookshelf
	 */
	handleShelfChange = (book, e) => {
		console.log(book)
		console.log(e)
		const shelf = e.target.value
		if (this.props.onUpdateBookshelf)
			this.props.onUpdateBookshelf(book, shelf)
	}

    render () {
		// Required parameters for this component
		const {book} = this.props

        return (
                //* Show only those books that meet our criteria

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
								<select value={book.shelf} onChange={this.handleShelfChange.bind(this, book)}>
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
					/* ./book */


		)
	}
}
export default Book
