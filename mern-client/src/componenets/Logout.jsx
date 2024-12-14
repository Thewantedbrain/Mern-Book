import React, { useContext } from 'react'
import { AuthContext } from '../contects/AuthProvider'
import { useLocation, useNavigate } from 'react-router-dom';

const Logout = () => {//Define un componente funcional de React
  const {logOut} = useContext(AuthContext);//Recupera la función logOut de cerrar la sesión del usuario en el sistema.
  const location = useLocation();//Obtiene el objeto de ubicación actual del enrutador.
  const navigate = useNavigate();//Obtiene una función para la navegación programática.

  const from = location.state?.from?.pathname || "/";//Extrae la ruta de redireccionamiento prevista después del cierre de sesión del estado de ubicación o la establece por defecto en "/".

  const handleLogout = () => {
    logOut().then(() => {//Llama a la función logOut desde AuthContext
      // Sign-out successful.
      alert('cierre de sesión exitoso');
      navigate(from, {replace:true})//Redirige al usuario a la ruta prevista después del cierre de sesión
    }).catch((error) => {
      // An error happened.
    });
    
  }

  return (
    <div className='h-screen bg-teal-100 flex items-center justify-center'>
      <button className='bg-red-700 px-8 py-2 text-white rounded' onClick={handleLogout}>Cerrar Session</button>
    </div>
  )
}

export default Logout