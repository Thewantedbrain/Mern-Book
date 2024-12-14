import React from 'react'
import FavBookimg from "../assets/fav.jpeg"
import { Link } from 'react-router-dom'

const FavBook = () => {
  return (
    <div className='px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-12'>
    <div className='md:w-1/2'>
        <img src={FavBookimg} alt="" className='rounded md:w-10/12'/>
    </div>
    <div className='md:w1/2 space-y-6'>
        <h2 className='text-5xl font-bold my-5 md:w-3/4 leading-snug'>Encuentra tu Favorito <span className='text-blue-700'>Libro Aqui!</span></h2>
        <p className='mb-10 text-lg md:w-5/6'>¿Estás buscando un libro en particular? ¿O simplemente te apetece explorar nuevos títulos?</p>
        <div className='flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14'>
            <div>
                <h3 className='text-5xl font-bold'>800+</h3>
                <p className='text-base'>Escucha libro</p>
            </div>
            <div>
            <h3 className='text-5xl font-bold'>550+</h3>
            <p className='text-base'>Usuarios Registrados</p>
            </div>
            <div>
            <h3 className='text-5xl font-bold'>1200+</h3>
            <p className='text-base'>PDF Descargados</p>
            </div>
        </div>
        <Link to="/shop" className='mt-12 block'><button className='bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300'>Explorar Mas</button></Link>
    </div>
    </div>
  )
}

export default FavBook