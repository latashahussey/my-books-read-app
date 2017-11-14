import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'


class ListBookshelves extends Component {
	static propTypes = {
      books: PropTypes.array.isRequired,
			onUpdateBookshelf: PropTypes.func.isRequired
    }

		handleChange = (bookId, e) => {
			const shelf = e.target.value
			if (this.props.onUpdateBookshelf)
				this.props.onUpdateBookshelf(bookId, shelf)
		}

  	render () {
      const { books } = this.props



      return (

      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div> {/* ./list-books-title  */}
        <div className="list-books-content">

					<div>
					{/* Currently Reading Bookshelf  */}
        	<div className="bookshelf">
          		<h2 className="bookshelf-title">Currently Reading</h2>
          		<div className="bookshelf-books">
           			<ol className="books-grid">
              			{books.filter((book) => book.shelf === 'currentlyReading').map((book)=> (
              			<li key={book.id}>
                			<div className="book">
                 				<div className="book-top">
                    				<div className="book-cover" style={{
        												width: 128, height: 193, backgroundImage:
                  						  `url(${book.imageLinks.smallThumbnail})` }}>
														</div> {/* ./book-cover */}
                   			 <div className="book-shelf-changer">
                      			<select value={book.shelf} onChange={this.handleChange.bind(this, book)}>
                                  <option value="none" disabled>Move to...</option>
                                  <option value="currentlyReading">Currently Reading</option>
                                  <option value="wantToRead">Want to Read</option>
                                  <option value="read">Read</option>
                                  <option value="none">None</option>
                            </select>
                    		</div> {/* ./book-shelf-changer  */}
											</div> {/* ./book-top  */}
                  				<div className="book-title">{book.title}</div>
        									{book.authors.map((author) => (
																<div key={author} className="book-authors">{author}</div>
													))}
											</div> {/* ./book  */}
              			</li>
									))} {/* ./books.filter.map  */}
           			 </ol> {/* ./books-grid */}
							 </div> {/* ./bookshelf-books  */}
       			 </div> {/* ./bookshelf  */}
     	 		</div> {/* ./div  */}

					{/* Want to Read Bookshelf  */}
        	<div className="bookshelf">
          		<h2 className="bookshelf-title">Want to Read</h2>
          		<div className="bookshelf-books">
           			<ol className="books-grid">
              			{books.filter((book) => book.shelf === 'wantToRead').map((book)=> (
              			<li key={book.id}>
                			<div className="book">
                 				<div className="book-top">
                    				<div className="book-cover" style={{
        												width: 128, height: 193, backgroundImage:
                  						  `url(${book.imageLinks.smallThumbnail})` }}>
														</div> {/* ./book-cover */}
                   			 <div className="book-shelf-changer">
                      			<select value={book.shelf} onChange={this.handleChange.bind(this, book)}>
                                  <option value="none" disabled>Move to...</option>
                                  <option value="currentlyReading">Currently Reading</option>
                                  <option value="wantToRead">Want to Read</option>
                                  <option value="read">Read</option>
                                  <option value="none">None</option>
                            </select>
                    		</div> {/* ./book-shelf-changer  */}
											</div> {/* ./book-top  */}
                  				<div className="book-title">{book.title}</div>
        									{book.authors.map((author) => (
                  					<div key={author} className="book-authors">{author}</div>
													))}
											</div> {/* ./book  */}
              			</li>
									))} {/* ./books.filter.map  */}
           			 </ol> {/* ./books-grid */}
							 </div> {/* ./bookshelf-books  */}
       			 </div> {/* ./bookshelf  */}

					{/* Read Bookshelf  */}
        	<div className="bookshelf">
          		<h2 className="bookshelf-title">Read</h2>
          		<div className="bookshelf-books">
           			<ol className="books-grid">
              			{books.filter((book) => book.shelf === 'read').map((book)=> (
              			<li key={book.id}>
                			<div className="book">
                 				<div className="book-top">
                    				<div className="book-cover" style={{
        												width: 128, height: 193, backgroundImage:
                  						  `url(${book.imageLinks.smallThumbnail})` }}>
														</div> {/* ./book-cover */}
                   			 <div className="book-shelf-changer">
                      			<select value={book.shelf} onChange={this.handleChange.bind(this, book)}>
                                  <option value="none" disabled>Move to...</option>
                                  <option value="currentlyReading">Currently Reading</option>
                                  <option value="wantToRead">Want to Read</option>
                                  <option value="read">Read</option>
                                  <option value="none">None</option>
                            </select>
                    		</div> {/* ./book-shelf-changer  */}
											</div> {/* ./book-top  */}
                  				<div className="book-title">{book.title}</div>
        									{book.authors.map((author) => (
                  					<div key={author} className="book-authors">{author}</div>
													))}
											</div> {/* ./book  */}
              			</li>
									))} {/* ./books.filter.map  */}
           			 </ol> {/* ./books-grid */}
							 </div> {/* ./bookshelf-books  */}
       			 </div> {/* ./bookshelf  */}

		 		</div> {/* ./list-books-content  */}
          <div className="open-search">
            	<Link to="/search">Add a book</Link>
          </div> {/* ./open-search */}
      </div>
        )}
}

// Make component available to app
export default ListBookshelves
