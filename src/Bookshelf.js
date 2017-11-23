import React, { Component } from 'react'
import Book from './Book'
import PropTypes from 'prop-types'

class Bookshelf extends Component {
    // Required properties for component
	static = {
        books: PropTypes.array.isRequired,
        bookshelves: PropTypes.array.isRequired,
		onUpdateBookshelf: PropTypes.func.isRequired
	}

    render() {

        // Required parameters for this component
        const {books, bookshelves} = this.props

        return (
            <div>
                {bookshelves.map((bookshelf) => (
                    <div key={bookshelf.id}>
                        <div  className="bookshelf">
                            <h2 className="bookshelf-title">{bookshelf.label}</h2>
                            <div className="bookshelf-books">
                                <ol key={Math.random()} className="books-grid">
                                    {books.filter((book) => book.shelf === bookshelf.id).map((book) => (
                                        /* Display Book Component */
                                            <li key={book.id}>
                                                <Book
                                                    book={book}
                                                    onUpdateBookshelf={this.props.onUpdateBookshelf}
                                                />
                                            </li>
                                    ))}{/* ./books.filter.map */}
                                </ol>{/* ./books-grid */}
                            </div>
                            {/* ./bookshelf-books */}
                        </div>{/* ./bookshelf  */}
                    </div>
                ))} {/* bookshelves.map */}
            </div>/* ./div */
        )
    }
}
export default Bookshelf
