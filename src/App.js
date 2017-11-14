import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import ListBookshelves from './ListBookshelves'
import SearchBooks from './SearchBooks'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends Component {
  state = {
    books: [],
    searchResults: []
  }

  // Grab all book objects from BooksAPI and store in array
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }

  updateBookshelf = (book, shelf) => {
    console.log(book)
    console.log(shelf)
    BooksAPI.update(book, shelf)
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }

  searchBooks = (query, maxResults) => {
    if (query.length !== 0) {
      BooksAPI.search(query, maxResults).then((searchResults) => {
        this.setState({searchResults})
      })
    } else {
      BooksAPI.getAll().then((books) => {
        this.setState({books})
			})
    }
	}
    // Use React Router to route user to correct UI
    render() {
      return (<div className="app">
        <Route exact path='/' render={() => (<ListBookshelves
					onUpdateBookshelf={this.updateBookshelf}
					books={this.state.books}/>)}/>

        <Route path='/search' render={() => (<SearchBooks
					onSearchBooks={this.searchBooks}
					searchResults={this.state.searchResults}
					onUpdateBookshelf={this.updateBookshelf}
					books={this.state.books}/>)}/>
      </div>)
    }
  }

  export default BooksApp
