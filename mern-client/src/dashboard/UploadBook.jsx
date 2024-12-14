import React, { useState } from 'react'
import { Button, Checkbox, Label, Select, TextInput, Textarea } from 'flowbite-react';

const UploadBook = () => {
  const bookCategories = [
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
    "Art and Design",
    "kitchen",
    "Love"
  ]
  const [selectBookCategory, setSelectedBookCategory] = useState(bookCategories[0]);

  const handleChangeSelectedValue = (event) =>{
    console.log(event.target.value);
    setSelectedBookCategory(event.target.value);
  }
  // handle book subm
  const handleBookSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
  
    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const Category = form.categoryName.value;
    const bookDescription = form.bookDescripcion.value;
    const bookPDFURL = form.bookPDFURL.value;

    const bookObj = {
      bookTitle, authorName, imageURL, Category, bookDescription, bookPDFURL
    }
    console.log(bookObj)

    //send
    fetch("http://localhost:5000/upload-book", {
      method:"POST",
      headers: {
        "Content-type":"application/json",
      },
      body:JSON.stringify(bookObj)
    }).then(res => res.json()).then(data =>{
      //console.log(data)
      alert("Libro cargado correctamente!!!")
      form.reset()
    })

  }
  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Cargar un libro</h2>
      {/*Primera columna*/}
      <form onSubmit={handleBookSubmit} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
        <div className='flex gap-8'>
        <div className='lg:w-1/2 '>
         <div className="mb-2 block">
         <Label htmlFor="bookTitle" value="bookTitle" />
         </div>
        <TextInput id="bookTitle" name='bookTitle' type="text" placeholder="Book name" required />
        </div>

        {/*autorName*/}
        <div className='lg:w-1/2 '>
        <div className="mb-2 block">
        <Label htmlFor="authorName" value="Author Name" />
        </div>
        <TextInput id="authorName" name='authorName' type="text" placeholder="Author Name" required />
        </div>
        </div>
        {/*segunda columna*/}

        <div className='flex gap-8'>
        <div className='lg:w-1/2 '>
         <div className="mb-2 block">
         <Label htmlFor="imageURL" value="imageURL" />
         </div>
        <TextInput id="imageURL" name='imageURL' type="text" placeholder="Book name" required />
        </div>
        
       <div className='lg:w-1/2 '>
       <div className="mb-2 block">
       <Label htmlFor="inputState" value="Book Category" />
       </div>
       <Select id='inputState' name='categoryName' className='w-full rounded' value={selectBookCategory} onChange={handleChangeSelectedValue}>
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
        name='bookDescripcion' className='w-full'required rows={5} />
      </div>

      {/*book pdn link*/}
      <div>
        <div className="mb-2 block">
          <Label htmlFor="bookPDFURL" value="book PDF URL" />
        </div>
        <TextInput id="bookPDFURL" type="text" placeholder="book pdf url" required />
      </div>
       <Button type="submit" className='mt-5'>
        Submit</Button>

      
    </form>

    </div>
  )
}

export default UploadBook