import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class ListBookshelves extends Component {

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
