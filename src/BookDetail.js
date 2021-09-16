import React from 'react'
import { useHistory } from 'react-router'

const BookDetail = ({location,match}) => {
    const book= location.state.list.find(e=>e.id === match.params.id)
    const hist =useHistory()
    return (
        <div>
            <h1>Book Detail</h1>
            <h2>{book.desc}</h2>
            <button onClick={ ()=> hist.goBack()}>Back</button>
            <button onClick={ ()=> hist.push('/')}>Home</button>
        </div>
    )
}

export default BookDetail
