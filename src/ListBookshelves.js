import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'


class ListBookshelves extends Component {
	// Required property types for component
	static propTypes = {
    	books: PropTypes.array.isRequired,
    	onUpdateBookshelf: PropTypes.func.isRequired
	}

	// Display all bookshelves
  	render () {

	    return (
			<div className="list-books" >
				<div className="list-books-title">
			        <h1>MyReads</h1>
			    </div>
			    {/* ./list-books-title */}
				<div className="list-books-content">
		            {/* Display Bookshelf  Component*/}
			        {this.props.children}
			    </div>
					{/* ./list-books-content */}

				<div className="open-search">
				    <Link to="/search">Add a book</Link>
				</div>
			    {/* ./open-search */}
			</div> // ./list-books
		) // ./return
	} // ./render
} // ./ListBookshelves Component

// Make component available to app
export default ListBookshelves
