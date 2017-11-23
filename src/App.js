import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import Bookshelf from './Bookshelf'
import ListBookshelves from './ListBookshelves'
import SearchBooks from './SearchBooks'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends Component {

    // Constructor for app
    constructor(props) {
        super(props)
        // Initialize state
        this.state = {
            books: [],
            searchResults: [],
            bookshelves: [
                {
                    id: "read",
                    label: "Read"
                },
                {
                    id: "currentlyReading",
                    label: "Currently Reading"
                },
                {
                    id: "wantToRead",
                    label: "Want To Read"
                }
            ]
        }

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
        console.log("Updating bookshelf...")
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
        const {books} = this.state
        if (query.length !== 0) {
            BooksAPI.search(query, maxResults).then((searchResults) => {
                // Check results for books already on a shelf
                for(let book in books) {
                    for(let result in searchResults) {
                        // If matching book is found in results, add its shelf property, otherwise set shelf to 'none'
                        if(books[book].id === searchResults[result].id) {
                            searchResults[result].shelf = books[book].shelf
                        } else if(!searchResults[result].shelf) {
                            searchResults[result].shelf = "none"
                        }
                    }
                }
                // update the state of the searchResults
                this.setState({searchResults})
                console.log(searchResults)
            })
        } else {
            BooksAPI.getAll().then((books) => {
                this.setState({books})
            })
        }
    }

    // Route user to correct UI
    render() {
        return (
            <div className="app">
                <Route exact path='/' render={() => (
                    <ListBookshelves>
                        <Bookshelf
                            bookshelves={this.state.bookshelves}
                            books={this.state.books}
                            onUpdateBookshelf={this.updateBookshelf}/>
                    </ListBookshelves>
                )}/>


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
