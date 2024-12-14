import React, { useEffect, useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import { FaCartShopping } from 'react-icons/fa6'
import axios from "axios";
import { Button } from 'flowbite-react';
import { jsPDF } from "jspdf";
import autoTable from 'jspdf-autotable'

const SingleBook = () => {
    const {_id, bookTitle, imageURL, bookDescription, bookPDFURL, Category} = useLoaderData();
    const [url, setUrl] = useState("");
    const [allBooks, setAllBooks] = useState([]);
    const [filteredBooks, setFilteredBooks] = useState([]);

    const fecha = new Date();
    const formattedDate = fecha.toLocaleDateString();
    
    const handleClick = (event) => {
      event.preventDefault();
      const linkURL = event.target.href; 
      const extractedBookTitle = bookTitle
      setUrl(linkURL);
      console.log(linkURL)
      console.log(extractedBookTitle)  
      window.open(linkURL, "_blank");

      
    };
    const [currLocation, setCurrLocation] = useState({});
    useEffect(()=>{    
        getLocation()
        if (currLocation.city && currLocation.ip) {
          handleSubmit();
         
        }
        
  },[currLocation])
  
  const getLocation = async () => {
    const location = await axios.get("https://ipapi.co/json");
    setCurrLocation(location.data);
  }
  const handleSubmit = () => {
  const city = currLocation.city;
  const address = currLocation.ip;
  
  const reportObject = {
    city,address,formattedDate,bookTitle, Category
  }
  console.log(reportObject)
  
  
  //send
  fetch("http://localhost:5000/upload-book", {
  method:"POST",
  headers: {
    "Content-type":"application/json",
  },
  body:JSON.stringify(reportObject)
  }).then(res => res.json()).then(data => {
  alert("Ubicacion cargada Correctamente")
  stop()
  })
  }
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
const generarPDF = () =>{
  const doc = new jsPDF();

  doc.text('Reporte',95,20);
  //crear una tabla para los detalles
  
  const columns = ['Fecha','Addres','Ciudad','Libro','Categoria'];
  const data = [
   [`${formattedDate}`, `${currLocation.ip}`, `${currLocation.city}`, `${bookTitle}`,`${Category}`]
  ];
 
  doc.autoTable({
   startY: 30,
   head: [columns],
   body: data
  })

  //guardar el pdf con un nombre especifico
  doc.save(`Reporte`);
 }
  return (
    <div className='mt-28 px-4 lg:px-24'>
      <div className='grid gap-8 my-12 items-center'>
      <button className='bg-blue-700 px-6 py-2 text-white font-medium
      hover:bg-black transition-all ease-in duration-200' onClick={generarPDF} >Generar Reporte</button>
        <img src={imageURL} alt="" className='w-full'/>
        <div className='bg-blue-600 hover:bg-black p-2 rounded w-full flex items-center justify-center'>
        <FaCartShopping  className='w-4 h-4 text-white items-center'/>
        <Link to={bookPDFURL} onClick={handleClick} >Aqui</Link>
        </div>
        <h2 className='font-bold text-black'>{bookTitle}</h2>
        <div className=' bg-teal-100 flex '>
        <h2>{bookDescription}</h2>
        
        </div>
      </div>
    </div>


  )
}

export default SingleBook