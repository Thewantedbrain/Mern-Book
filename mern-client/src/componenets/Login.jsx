import React, { useContext } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../contects/AuthProvider'
import { useState } from 'react';
import googlelogo from "../assets/google.png"



const Login = () => {
    const {login, loginwithGoogle} = useContext(AuthContext); //obtener el inicio de session
    const [error, serError] = useState("");//almaceno cualquier error
    const location = useLocation();//ubicacion del enrutador actual
    const navigate = useNavigate();//navegacion programatica

   const from = location.state?.from?.pathname || "/"; //extrae la ruta
   const handleLogin = (event) => { //se activa al enviar el formulario
    event.preventDefault();//evita el envio predeterminado del formulario
    const form = event.target;//Obtiene el elemento del formulario enviado..
    const email = form.email.value;//Extrae el valor del correo electrónico del formulario.
    const password = form.password.value;//Extrae el valor de la contraseña del formulario.
    login(email,password).then((userCredential) => {//Llama a la función
        // Signed in 
        const user = userCredential.user;//Obtiene el objeto del usuario que ha iniciado sesión.
        alert("Inicia sesión exitosamente")
        navigate(from, {replace:true})//Redirige a la ruta prevista, reemplazando la entrada actual del historial.
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;// Obtiene el código de error.
        const errorMessage = error.message;// Obtiene el mensaje de error.
        serError(errorMessage)//Actualiza el estado del error con el mensaje.
      });

  }
   const handleRegister = () =>{//Función que se activa para el inicio de sesión con Google.
   loginwithGoogle().then((result)=>{
	const user = result.user;//Llama a la función loginwithGoogle desde AuthContext.
	alert("Firmar con éxito")
	navigate(from, {replace:true})// Redirige a la ruta prevista, reemplazando la entrada actual del historial.
   }).catch((error) => {
	const errorCode = error.code;
	const errorMessage = error.message;
	serError(errorMessage)//Actualiza el estado del error con el mensaje.
	// ..
});
   }
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
	<div className="relative py-3 sm:max-w-xl sm:mx-auto">
		<div
			className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 
            sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
		</div>
		<div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
			<div className="max-w-md mx-auto">
				<div>
					<h1 className="text-2xl font-semibold">Inicio de sesión</h1>
				</div>
				<div className="divide-y divide-gray-200">
					<form onSubmit={handleLogin} className="py-8 text-base leading-6 space-y-4 text-gray-700 
                      sm:text-lg sm:leading-7">
						<div className="relative">
							<input  id="email" name="email" type="text" className="peer  h-10 w-full border-b-2 
                           border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" 
                           placeholder="Email address" />
						</div>
						<div className="relative">
							<input  id="password" name="password" type="password" className="peer  h-10 w-full 
                            border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" 
                            placeholder="Password" />
						</div>
           {error ? <p className='text-red-600 text-base'>
El correo electrónico o la contraseña no son correctos:</p>:""}
                         <p>
                         Si no tienes una cuenta.Por favor <Link to="/sign-up" className='text-blue-600 underline'>regístrate </Link> 
                          aqui
                         </p>
						<div className="relative">
							<button className="bg-blue-500 text-white rounded-md px-2 py-1">Acceso</button>
						</div>
					</form>
				</div>
				<hr />
				<div className='flex w-full items-center flex-col mt-5 gap-3'>
					<button onClick={handleRegister} className='block'><img src={googlelogo} alt="" 
                    className='w-12 h-12 inline-block'/>Iniciar sesión con Google</button>
				</div>
			</div>
		</div>
	</div>
</div>
  )
}

export default Login