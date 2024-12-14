import React, { useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import { Button, Checkbox, Label, Select, TextInput, Textarea } from 'flowbite-react';

const EditBook = () => {//Define un componente funcional llamado EditBook.
  const {id} = useParams();//Extrae el ID del libro de la URL para identificar el libro a editar.
  const {bookTitle, authorName, imageURL, Category, bookDescription, bookPDFURL} = useLoaderData();//btiene los datos del libro a editar

  const bookCategories = [//lista de categorías de libros para el componente Select.
  "Fiction",
  "Non-Fiction",
  "Mistery",
  "Programing",
  "Science Fiction",
  "Fantasy",
  "Horror",
  "Bibliograhy",
  "Autobiographi",
  "History",
  "self-help",
  "Memoir",
  "Bussiness",
  "children Book",
  "Travel",
  "Religion",
  "Art and Design"
]
const [selectBookCategory, setSelectedBookCategory] = useState(bookCategories[0]);//Mantiene el estado de la categoría de libro seleccionada.
const handleChangeSelectedValue = (event) =>{//Actualiza el estado de la categoría seleccionada cuando se cambia en el componente Select.
  console.log(event.target.value);
  setSelectedBookCategory(event.target.value);
}
// handle book subm
const handleUpdate = (event) => {// Maneja el envío del formulario para actualizar el libro.
  event.preventDefault();
  const form = event.target;
  
  const bookTitle = form.bookTitle.value;
  const authorName = form.authorName.value;
  const imageURL = form.imageURL.value;
  const Category = form.categoryName.value;
  const bookDescription = form.bookDescripcion.value;
  const bookPDFURL = form.bookPDFURL.value;
  const UpdatedbookObj = {
    bookTitle, authorName, imageURL, Category, bookDescription, bookPDFURL
  }
  //console.log(bookObj)
  //Update book
  fetch(`http://localhost:5000/book/${id}`,{
    method:"PATCH",//actualizar recursos parcialmente.
    headers: {
       "Content-Type":"application/json" //para indicar que el cuerpo de la solicitud contiene datos JSON.
    },
    body:JSON.stringify(UpdatedbookObj)

  }).then(res => res.json()).then(data =>{
    //console.log(data)
    alert("El libro se actualizó correctamente.!!!")
    form.reset()
    window.location.reload();
    })

}
return (
  <div className='px-4 my-12'>
    <h2 className='mb-8 text-3xl font-bold'>Actualizar un libro</h2>

    {/*Primera columna*/}
    <form onSubmit={handleUpdate} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
      <div className='flex gap-8'>
      <div className='lg:w-1/2 '>
       <div className="mb-2 block">
       <Label htmlFor="bookTitle" value="bookTitle" />
       </div>
      <TextInput id="bookTitle" name='bookTitle' type="text" placeholder="Book name" required defaultValue={bookTitle}/>
      </div>

      {/*autorName*/}
      <div className='lg:w-1/2 '>
      <div className="mb-2 block">
      <Label htmlFor="authorName" value="Author Name" />
      </div>
      <TextInput id="authorName" name='authorName' type="text" placeholder="Author Name" required defaultValue={authorName}/>
      </div>
      </div>

      {/*segunda columna*/}
      <div className='flex gap-8'>
      <div className='lg:w-1/2 '>
       <div className="mb-2 block">
       <Label htmlFor="imageURL" value="imageURL" />
       </div>
      <TextInput id="imageURL" name='imageURL' type="text" placeholder="Book name" required defaultValue={imageURL}/>
      </div>
      
     <div className='lg:w-1/2 '>
     <div className="mb-2 block">
     <Label htmlFor="inputState" value="Book Category" />
     </div>
     <Select id='inputState' name='categoryName' className='w-full rounded' value={selectBookCategory} onChange=
      {handleChangeSelectedValue}>
      {
        bookCategories.map((option) => <option key={option} value={option}>{option}</option>)
      }
     </Select>
    </div>
   </div>
   {/*Descripcion book*/}
   <div>
      <div className="mb-2 block">
        <Label htmlFor="BookDescripcion" value="BookDescripcion" />
      </div>
      <Textarea id="bookDescripcion" placeholder="Write your book descrpcion..." 
      name='bookDescripcion' className='w-full'required rows={5} defaultValue={bookDescription}/>
    </div>
    {/*book pdn link*/}
    <div>
      <div className="mb-2 block">
        <Label htmlFor="bookPDFURL" value="book PDF URL" />
      </div>
      <TextInput id="bookPDFURL" type="text" placeholder="book pdf url" required defaultValue={bookPDFURL}/>
    </div>
     <Button type="submit" className='mt-5'>
      Actualizar libro</Button>
    
  </form>
  </div>
)
}

export default EditBook