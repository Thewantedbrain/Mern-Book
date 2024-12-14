import React, { useEffect, useState } from 'react'
import BookCards from './BookCards';

const BestBookSeller = () =>{
    const [books, setBooks] = useState([]);

    useEffect( () => {
        fetch("http://localhost:5000/all-books").then(res=>res.json()).then(data => setBooks(data.slice(0,8)))
    },[])
  return (
    <div>
      <BookCards books={books} headline="Mejores Vendidos"/>
    </div>
  )
}

export default BestBookSeller