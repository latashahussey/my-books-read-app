import React, { Component } from 'react'

class Bookshelf extends Component {

    render() {
        return (
         <div>
            <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <div className="bookshelf-books">
                    {this.props.children}
                </div>
                {/* ./bookshelf-books */}
            </div>{/* ./bookshelf  */}
        </div>// ./div

        )
    }
}
export default Bookshelf
