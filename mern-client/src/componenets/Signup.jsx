import React, { useContext } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../contects/AuthProvider'
import { useState } from 'react';
import googlelogo from "../assets/google.png"

const SignUp = () => {//Define un componente funcional llamado SignUp
	const {createUser, loginwithGoogle} = useContext(AuthContext);//Accede a las funciones de autenticación desde el AuthContext.
	const [error, serError] = useState("error");//Variable de estado para almacenar cualquier mensaje de error.

	const location = useLocation();//Obtiene la información de la ubicación actual.
	const navigate = useNavigate();//Obtiene una función de navegación para la navegación programática.

	const from = location.state?.from?.pathname || "/";//Extrae la ruta de redireccionamiento prevista después de un registro o inicio de sesión correcto.

    const handleSignUp = (event) => {//Maneja el envío del formulario para el registro con correo electrónico y contraseña.
    event.preventDefault();//
    const form = event.target;//Obtiene el elemento del formulario enviado..
    const email = form.email.value;
    const password = form.password.value;

    createUser(email,password).then((userCredential) => {
		// Signed up 
		const user = userCredential.user;//Extrae el objeto de usuario.
		alert("Firmar con éxito")
		navigate(from, {replace:true})//Redirige al usuario a la URL visitada anteriormente
		// ...
	  })
	  .catch((error) => {
		const errorCode = error.code;//Extrae el código de error para su identificación.
		const errorMessage = error.message;//Extrae el mensaje de error para mostrarlo.
		serError(errorMessage)// establece una variable de estado para almacenar el mensaje de error,
		// ..
	  });
	
      }

       const handleRegister = () =>{
	   loginwithGoogle().then((result)=>{
		const user = result.user;//Extrae el objeto de usuario.
		alert("Sign-Succefully")
		navigate(from, {replace:true})//Redirige al usuario a la URL visitada anteriormente
	   }).catch((error) => {
		const errorCode = error.code;//Extrae el código de error para su identificación.
		const errorMessage = error.message;//Extrae el mensaje de error para mostrarlo.
		serError(errorMessage)// establece una variable de estado para almacenar el mensaje de error
		// ..
	});

  }
  return (
<div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
	<div className="relative py-3 sm:max-w-xl sm:mx-auto">
		<div
			className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
		</div>
		<div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
			<div className="max-w-md mx-auto">
				<div>
					<h1 className="text-2xl font-semibold">Formulario de registro</h1>
				</div>
				<div className="divide-y divide-gray-200">
					<form onSubmit={handleSignUp} className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
						<div className="relative">
							<input  id="email" name="email" type="text" className="peer  h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" />
						</div>
						<div className="relative">
							<input  id="password" name="password" type="password" className="peer  h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
						</div>
            <p>
			si tienes una cuenta. Por favor <Link to="/login" className='text-blue-600 underline'>Inicia sesión </Link>  aquí
            </p>
						<div className="relative">
							<button className="bg-blue-500 text-white rounded-md px-2 py-1">Regístrate</button>
						</div>
					</form>
				</div>
				<hr />
				<div className='flex w-full items-center flex-col mt-5 gap-3'>
					<button onClick={handleRegister} className='block'><img src={googlelogo} alt="" className='w-12 h-12 inline-block'/>Iniciar sesión con Google</button>
				</div>
			</div>
		</div>
	</div>
</div>

  )
}

export default SignUp