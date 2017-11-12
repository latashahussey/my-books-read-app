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

// Use React Router to route user to correct UI
  render() {
    return (
      <div className="app">
       	<Route exact path='/' render={()=> (
    		<ListBookshelves books={this.state.books}/>
    	)}/>
		
		<Route path='/search' render={()=> (
    		<SearchBooks />
    	)}/>
      </div>
    )
  }
}

export default BooksApp
