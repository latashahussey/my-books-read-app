import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import ListBookshelves from './ListBookshelves'
import SearchBooks from './SearchBooks'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends Component {
	state = {
   		books: []
  	}

	// Grab all book objects from BooksAPI and store in array
	componentDidMount() {
      BooksAPI.getAll().then((books) => {
      	this.setState({books})
			})
    }

		updateBookshelf = (book, shelf) => {
			let books = this.state
			console.log(book)
			console.log(shelf)
	    BooksAPI.update(book, shelf)
			BooksAPI.getAll().then((books) => {
				this.setState({books})
			})
	}

		searchBooks = (query, maxResults) => {
			BooksAPI.search(query, maxResults)
		}


// Use React Router to route user to correct UI
  render() {
    return (
      <div className="app">
       	<Route exact path='/' render={()=> (
    		<ListBookshelves
					onUpdateBookshelf={this.updateBookshelf}
					books={this.state.books}/>
    	)}/>

		<Route path='/search' render={()=> (
    		<SearchBooks />
    	)}/>
      </div>
    )
  }
}

export default BooksApp
