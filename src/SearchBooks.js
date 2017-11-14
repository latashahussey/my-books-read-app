import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'


class SearchBooks extends Component {

  static propTypes = {
    searchResults: PropTypes.array.isRequired,
    onSearchBooks: PropTypes.func.isRequired
  }

  handleChange = (e) => {
    if (this.props.onSearchBooks)
      this.props.onSearchBooks(e.target.value)
}




  render() {
    const { searchResults } = this.props



    return (
      <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search">Close</Link>
        <div className="search-books-input-wrapper">

          <input
            type="text"
            placeholder="Search by title or author"

            onChange={this.handleChange.bind(this)} />
        </div>
      </div>
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
                      }}></div>
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
                  {book.authors.map((author) => (<div key={author} className="book-authors">{author}</div>))}
                </div>
                {/* ./book */}
              </li>
            ))}
            {/* ./books.filter.map */}

          </ol>


      </div>
    </div>)

  }

}

// Make component available to app
export default SearchBooks
