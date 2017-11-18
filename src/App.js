import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import ListBookshelves from './ListBookshelves'
import SearchBooks from './SearchBooks'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends Component {
    // Initialize state
    state = {
        books: [],
        searchResults: []
    }

    // Grab all book objects from remote BooksAPI and store them in an array
    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState({books})
        })
    }

    /*
        @description updateBookshelf Handles updates to bookshelf
        @param book {object} Book stored on bookshelf
        @param shelf {string} The bookshelf
     */
    updateBookshelf = (book, shelf) => {
        console.log(book)
        console.log(shelf)
        BooksAPI.update(book, shelf)
        BooksAPI.getAll().then((books) => {
            this.setState({books})
        })
    }

    /*
        @description searchBooks Handles book search feature
        @param query {string} Search query
        @param maxResults {integer}  Max number of search results
     */
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

    // Route user to correct UI
    render() {
        return (<div className="app">
            <Route exact="exact" path='/' render={() => (
                <ListBookshelves
                    onUpdateBookshelf={this.updateBookshelf}
                    books={this.state.books}/>)
                }/>

            <Route path='/search' render={() => (
                <SearchBooks
                    onSearchBooks={this.searchBooks}
                    searchResults={this.state.searchResults}
                    onUpdateBookshelf={this.updateBookshelf}
                    books={this.state.books}/>)
                }/>
        </div>)
    }
}

export default BooksApp
