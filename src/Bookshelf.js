// Component that represents a digital bookshelf

import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

class Bookshelf extends Component {

    // Required prop types
    static propTypes = {
      books: PropTypes.array.isRequired,
      onUpdateBookshelf: PropTypes.func.isRequired
    }

    /*
        @description Handles book's bookshelf change
        @param bookId {string} Unique string for books
        @param e {string} The bookshelf
     */
    handleShelfChange = (bookId, e) => {
      const shelf = e.target.value
      if (this.props.onUpdateBookshelf)
        this.props.onUpdateBookshelf(bookId, shelf)
    }

    // Display the bookshelf
    render () {
        return (




        )
  }
}
