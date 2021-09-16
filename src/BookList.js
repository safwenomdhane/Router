import React from 'react'
import { Link } from 'react-router-dom'
const BookList = ({list}) => {
    return (
        <div>
            <h1>Book list</h1>
            {list.map(e => <div>
                <Link to={{ pathname: `detailbook/${e.id}`,state: { list: list } } }>{e.title}</Link>

                </div> )}
        </div>
    )
    }

export default BookList
