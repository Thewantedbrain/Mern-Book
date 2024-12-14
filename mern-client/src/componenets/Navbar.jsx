import React, { useContext } from 'react'
import { useEffect, useState } from 'react'
import { FaBarsStaggered, FaBlog, FaXmark } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { AuthContext } from '../contects/AuthProvider';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);//Gestiona el estado del menú móvil, inicialmente cerrado.
    const [isSticky, setIsSticky] = useState(false);//Rastrea si la barra de navegación debe estar fija en la parte superior, inicialmente falso.

    const {user} = useContext(AuthContext);//Recupera la información del usuario del AuthContext
    console.log(user)

//toggle menu
//alternar menu
const toggleMenu = () =>{//Alterna la visibilidad del menú móvil según el estado
  setIsMenuOpen(!isMenuOpen);
}
useEffect(() =>{//Maneja el comportamiento pegajoso de la barra de navegación.
  const handleScroll = () => {
    if(window.scrollY>100){//scrolly propiedad que representa cuanto se ha desplazado verticalmente
      setIsSticky(true);
    }else {
      setIsSticky(false);
    }
  }
  window.addEventListener("scroll", handleScroll);
  return () => {
   window.addEventListener("scroll", handleScroll);
  }
},[])
//navItems here
//elementos de navegacion
const navItems = [// Una matriz que contiene objetos que definen enlaces de navegación con su texto y las rutas correspondientes.
  {link: "Inicio", path:"/"},
  {link: "Tienda", path:"/shop"},
  {link: "Reporte", path:"/report"},
  {link: "Vende Tu Libro", path:"/admin/dashboard"},
]
  return (
    <header className='w-full bg-transparent fixed top-0 left-0 right-0 transiyion-all ease-in duration-300'>
        <nav className={ `py-4 lg:px-24 px-4 ${isSticky ? "sticky top-0 left-0 right-0 bg-blue-300":""} `}>
            <div className='flex justify-between items-center text-base grap-8'>
              {/*log*/}
              <Link to="/" className='text-2x1 font-bold text-blue-700 flex items-center gap-2'><FaBlog className='inline-block'/>Libros</Link>
              {/* nav item for large device */}

              <ul className='md:flex space-x-12 hidden'>
                {
                 navItems.map(({link, path}) => <Link key={path} to={path} className='block text-base text-black uppercase cursor-pointer hover:text-blue-700'>{link}</Link>)
                  }
              </ul>
              {/* btn for lg devices */}  
              <div className='space-x-12 hidden lg:flex items-center'>
              <button><FaBarsStaggered className='w-5 hover:text-blue-700'/></button>

              </div>
              {/* menu btn for moviles devices*/}
              <div className='md:hidden'>
                <button onClick={toggleMenu} className='text-bkack focus:outline-none'>
                  {
                    isMenuOpen ? <FaXmark className='h-5 w-5 text-black'/> : <FaBarsStaggered className='h-5 w-5 text black'/>
                  }
                </button>
              </div>
            </div>
            
            {/*navitems for on devices*/}
            <div className={`space-y-4 px-4 mt-16 py-7 bg-blue-700 ${isMenuOpen ? "block fixed top-0 right-0 left-0":"hidden"} ` }>
            {
              navItems.map(({link, path}) => <Link key={path} to={path} className='block text-base text-white
              uppercase cursor-pointer'>{link}</Link>)
            }
          </div>  
        </nav>
    </header>
  )
}

export default Navbar