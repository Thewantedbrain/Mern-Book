import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

//react icons
import {FaStar} from "react-icons/fa6"
import { Avatar } from 'flowbite-react';
import propic from "../assets/Perfil.png"
import propic2 from "../assets/perfil2.jpg"
import propic3 from "../assets/perfil3.jpg"
import propic4 from "../assets/perfil4.jpg"


//import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

const Review = () => {
  return (
    <div className='my-12 px-4 lg:px-24'>
        <h2 className='text-5xl font-bold text-center mb-10 leading-snug'>Nuestros clientes</h2>
        <div>
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
                {/* text*/}
                <div className='mt-7'>
                    <p className='mb-5'>He estado usando esta página web durante varios meses para encontrar nuevos libros para leer y estoy muy satisfecho con ella. La selección de libros es amplia y diversa, con títulos de todos los géneros y autores. </p>
                    <Avatar img={propic} alt="avatar of Jese" rounded className='w-10 mb-4'/>
                    <h5 className='text-lg font-medium'>Sarah Ping</h5>
                    <p className='text-base'>CEO, ABC Company</p>
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'> 
    <div className='space-y-6'>
        <div className='text-amber-500 flex gap-2'>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
        </div>
        {/* text*/}
        <div className='mt-7'>
            <p className='mb-5'>Desde que descubrí esta página web, se ha convertido en mi lugar favorito para comprar libros. La experiencia de compra es sencilla y rápida, y los precios son muy competitivos.Gran variedad de libros disponibles
            Página web fácil de usar
            </p>
            <Avatar img={propic2} alt="avatar of Jese" rounded className='w-10 mb-4'/>
            <h5 className='text-lg font-medium'>Maria Rodriguez</h5>
            <p className='text-base'>Lectora</p>
        </div>
    </div>
    </SwiperSlide>

    <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
    <div className='space-y-6'>
        <div className='text-amber-500 flex gap-2'>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
        </div>
        {/* text*/}
        <div className='mt-7'>
            <p className='mb-5'>Descubrí esta página web hace poco tiempo y me ha cautivado por completo. Es un verdadero paraíso para los amantes de los libros, con una selección inmensa de títulos de todos los géneros y autores.Amplia selección de libros 
            
           </p>
            <Avatar img={propic3} alt="avatar of Jese" rounded className='w-10 mb-4'/>
            <h5 className='text-lg font-medium'>Elio Hernandez</h5>
            <p className='text-base'>Lector</p>
        </div>
    </div>
    </SwiperSlide>

    <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
    <div className='space-y-6'>
        <div className='text-amber-500 flex gap-2'>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
        </div>
        {/* text*/}
        <div className='mt-7'>
            <p className='mb-5'> Desde que entré por primera vez a esta página web, me sentí transportado a un universo de libros. La inmensidad de su catálogo me dejó sin aliento, y la facilidad de navegación me permitió encontrar rápidamente lo que buscaba
            </p>
            <Avatar img={propic4} alt="avatar of Jese" rounded className='w-10 mb-4'/>
            <h5 className='text-lg font-medium'>Yeferson</h5>
            <p className='text-base'>Ususario</p>
        </div>
    </div>
    </SwiperSlide>

      </Swiper>
        </div>
    </div>
  )
}

export default Review