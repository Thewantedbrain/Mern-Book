import { Table } from 'flowbite-react';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { jsPDF } from "jspdf";
import autoTable from 'jspdf-autotable'

export const Report = () => {
  const [allBooks, setAllBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // Added state for search term


  useEffect(() =>{
    fetch("http://localhost:5000/all-books").then(res => res.json()).then((data) => {
      const filteredBooks = data.filter(
        (book) =>
        book.formattedDate && book.address && book.city && book.bookTitle && book.Category
      );
      setAllBooks(data);
      setFilteredBooks(filteredBooks);
    });
}, []);
const handleSearchChange = (event) => {
  setSearchTerm(event.target.value);
};

const filteredBooksBySearch = filteredBooks.filter((book) => {
  const searchTermLower = searchTerm.toLowerCase();
  return (
    book.formattedDate.toLowerCase().includes(searchTermLower) ||
    book.address.toLowerCase().includes(searchTermLower) ||
    book.city.toLowerCase().includes(searchTermLower) ||
    book.bookTitle.toLowerCase().includes(searchTermLower) ||
    book.Category.toLowerCase().includes(searchTermLower)
  );
});
const generarPDF = () =>{
  const doc = new jsPDF();

  doc.text('Reporte',95,20);
  //crear una tabla para los detalles
  
  const columns = ['Fecha','Address','Ciudad','Libro','Categoria'];
  const data = [];

  filteredBooks.forEach(book =>{
    const bookData = [
      book.formattedDate,
      book.address,
      book.city,
      book.bookTitle,
      book.Category,
    ];
    data.push(bookData)
  });

  doc.autoTable({
    startY: 30,
    head: [columns],
    body: data
  })

  //guardar el pdf con un nombre especifico
  doc.save(`Reporte`);
}

  return (
    <div className='px-4 my-12 p-5 bg-light'>
    <h2 className='mb-8 text-3xl font-bold'>Lista de Reportes</h2>
    <input
          type="text"
          className="border border-gray-300 rounded-md px-2 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Buscar por..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
    {/*Table book data*/}
    <div className='bg-white shadow border'>
    <table className='table lg:w-[1180px] '>
      <thead>
        <tr>
          <th>Fecha</th>
          <th>Address</th>
          <th>Ciudad</th>
          <th>Libro</th>
          <th>Categoria</th>
        </tr>
      </thead>
      <tbody>
        {filteredBooksBySearch.map((book,i)=>(
          <tr key={i}>
            <td className="text-center">{book.formattedDate}</td>
            <td className="text-center">{book.address}</td>
            <td className="text-center">{book.city}</td>
            <td className="text-center">{book.bookTitle}</td>
            <td className="text-center">{book.Category}</td>

          </tr>
        ))}
      </tbody>
    </table>
    </div>
   <button className='bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200' onClick={generarPDF}>Imprimir</button>
</div>


  )
}
