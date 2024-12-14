import React from 'react'
import BannerCards from '../home/BannerCards'

const Banner = () => {
  return (
    <div className='px-4 lg:px-24 bg-teal-100 flex items-center'>
        <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40'>
            {/* lef side */}
            <div className='md:w-1/2 space-y-8 h-full'>
                <h2 className='text-5xl font-bold leading-snug text-black'>Compra y Vende tu libro <span className='text-blue-700'>al mejor precio</span></h2>   
                <p className='md:w-4/5'>¿Eres un amante de la lectura? ¿Te gustaría encontrar tus libros favoritos al mejor precio?
                 ¡Aqui lo hacemos posible! Somos una plataforma online de compra y venta de libros donde encontrarás una amplia variedad de títulos, desde los más clásicos hasta los más recientes.
                Aqui puedes encontrar libros nuevos, de segunda mano o descatalogados. También ofrecemos una sección de libros infantiles, juveniles, de autoayuda, ficción, no ficción, etc.
                  </p>
                  
                  
                  
                  
            </div>
            {/*right side*/}
            <div>
              <BannerCards></BannerCards>
            </div>
        </div>
    </div>


  ) 
}

export default Banner