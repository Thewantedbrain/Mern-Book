import React, { useEffect, useState } from 'react'
import { Table } from 'flowbite-react';
import { Link } from 'react-router-dom';

const ManageBook = () => {
  const [allBooks, setAllBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  useEffect(() =>{
    fetch("http://localhost:5000/all-books").then(res => res.json()).then((data) => {
      const filteredBooks = data.filter(
        (book) =>
          book.bookTitle && book.authorName && book.Category
      );
      setAllBooks(data);
      setFilteredBooks(filteredBooks);
    });
}, []);
  //delete  a book 
  const handleDelete = (id) =>{
    console.log(id)
    fetch(`http://localhost:5000/book/${id}`,{
      method:"DELETE",

    }).then(res=>res.json()).then(date=> {alert("El libro se eliminó exitosamente")})
    //setAllBooks(data);
    window.location.reload();
  }
  

  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Maneja tu libro</h2>

      {/*Table book data*/}
      <Table className='lg:w-[1180px]'>
        <Table.Head>
          <Table.HeadCell>N°.</Table.HeadCell>
          <Table.HeadCell>Book Name</Table.HeadCell>
          <Table.HeadCell>Author Name</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          
          <Table.HeadCell>
            <span>Edit or Manage</span>
          </Table.HeadCell>
        </Table.Head>
        {
          filteredBooks.map((book, index)=> <Table.Body className="divide-y" key={book._id}>
            <Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
              <Table.Cell className='whitespace-nowrap font-medium text-gray-900 dark:text-white'>
                {index + 1}
              </Table.Cell>
              
              <Table.Cell className='whitespace-nowrap font-medium text-gray-900 dark:text-white'>
                {book.bookTitle}
              </Table.Cell>
              <Table.Cell>
                {book.authorName}
              </Table.Cell>
              <Table.Cell>
                {book.Category}
              </Table.Cell>
              
              <Table.Cell>
                <Link
                  className='font-medium text-cyan-600 hover:underline mr-5 dark:text-cyan-500' 
                  to={`/admin/dashboard/edit-books/${book._id}`}
                >
                    Edit
                </Link>
                <button onClick={()=> handleDelete(book._id)} className='bg-red-600 px-4 py-1 font-semibold text-white rounded-sm hover:bg-sky-600'>Borrar</button>
              </Table.Cell>
            </Table.Row>
          </Table.Body>)
        }
      </Table>     
      </div>
  
  )
  
}

export default ManageBook