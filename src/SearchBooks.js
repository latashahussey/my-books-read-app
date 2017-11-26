import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import Book from './Book'
import {Debounce} from 'react-throttle'

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

    // Display search results
    render() {
        // Parameter for this component
        const {searchResults} = this.props

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/" className="close-search">Close</Link>
                    <div className="search-books-input-wrapper">
                        {/* Delay search by 400ms to prevent overloading requests */}
                        <Debounce time="400" handler="onChange">
                            <input type="text" placeholder="Search by title or author" onChange={this.handleSearchTerms.bind(this)}/>
                        </Debounce>
                    </div> {/* ./search-books-input-wrapper */}
                </div> {/* ./search-books */}
                <div className="search-books-results">
                    <ol className="books-grid">
                        {/* Display book */}
                        {searchResults.map((book) => (
                            <Book
                                book={book}
                                onUpdateBookshelf={this.props.onUpdateBookshelf}
                            />
                        ))}
                    {/* ./books.filter.map */}
                </ol>
            </div>
        </div>
    )

    }

}

// Make component available to app
export default SearchBooks
