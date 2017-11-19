import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

class SearchBooks extends Component {
    // Required property types for component
    static propTypes = {
        books: PropTypes.array.isRequired,
        searchResults: PropTypes.array.isRequired,
        onSearchBooks: PropTypes.func.isRequired,
        onUpdateBookshelf: PropTypes.func.isRequired
    }

    /*
		@description handleSearchTerms Handles book search
		@param e {string} Search term
	 */
    handleSearchTerms = (e) => {
        if (this.props.onSearchBooks)
            this.props.onSearchBooks(e.target.value)
    }

    /*
		@description handleShelfChange Handles book's bookshelf change
		@param bookId {string} Unique string for books
		@param e {string} The bookshelf
	 */
    handleShelfChange = (bookId, e) => {
        const shelf = e.target.value
        if (this.props.onUpdateBookshelf)
            this.props.onUpdateBookshelf(bookId, shelf)
    }

    // Display search results
    render() {
        // Parameter for this component
        const {searchResults} = this.props

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/" className="close-search">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author" onChange={this.handleSearchTerms.bind(this)}/>
                    </div> {/* ./search-books-input-wrapper */}
                </div> {/* ./search-books */}
            <div className="search-books-results">
                <ol className="books-grid">
                    {searchResults.map((book) => (
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
                                        <select value={book.shelf} onChange={this.handleShelfChange.bind(this, book)}>
                                            <option  disabled="disabled">Move to...</option>
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
                                {book.authors.map((author) => (<div key={author} className="book-authors">{author}</div>))}
                            </div>
                            {/* ./book */}
                        </li>))
                    }
                    {/* ./books.filter.map */}
                </ol>
            </div>
        </div>
    )

    }

}

// Make component available to app
export default SearchBooks
