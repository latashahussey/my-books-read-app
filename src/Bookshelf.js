import React, { Component } from 'react'

class Bookshelf extends Component {
    static bookshelves = [
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

    render() {
        return (
            <div>
                { for (bookshelf in bookshelves) {
                   <div className="bookshelf">
                       <h2 className="bookshelf-title">{bookshelves[bookshelf]}</h2>
                       <div className="bookshelf-books">
                           {this.props.children}
                       </div>
                       {/* ./bookshelf-books */}
                   </div>/* ./bookshelf  */
               }}
            </div>// ./div
        )
    }
}
export default Bookshelf
