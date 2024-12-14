import React, { useEffect, useState } from 'react'
import { Card } from 'flowbite-react';
import { Link, useLoaderData, useRouteLoaderData } from 'react-router-dom';

const Shop = () => {
  
  const [books, setBooks] = useState([]);
  const [url, setUrl] = useState("");
  
  
  const handleClick = (event) => {
    event.preventDefault();
    const linkURL = event.target.href; 
  
    setUrl(linkURL);
    console.log(linkURL)
    window.open(linkURL, "_blank");
        
  };  
  useEffect(()=>{
    fetch("http://localhost:5000/all-books").then(res=> res.json()).then(data => setBooks(data));
  },[])

  return (
    <div className='mt-28 px-4 lg:px-24'>
      <h2 className='text-5xl font-bold text-center'>Todos los Libros estan Aqui!</h2>
      <div className='grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1'>
        {
          books.filter(book =>book.bookTitle && book.authorName && book.Category).map(book => ( <Card
            //className="max-w-sm"
          >
            
            <img src={book.imageURL} alt="" className='h-96'/>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            <p>
              {book.bookTitle}
            </p>
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
             <p>
             </p>
            </p>
            <button className='bg-blue-700 font-semibold text-white py-2 rounded'><Link to={`/book/${book._id}`} onClick={handleClick} >Comprar Ahora</Link></button>
            
          </Card>))
        }
      </div>
    </div>
  )
}

export default Shop