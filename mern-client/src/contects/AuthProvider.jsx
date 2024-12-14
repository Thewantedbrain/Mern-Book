import React, { Children, createContext, useEffect, useState } from 'react'
import app from '../firebase/firebase.config';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, signOut } from "firebase/auth";
import Logout from '../componenets/Logout';

export const AuthContext = createContext();// Crea un contexto de React para compartir información de autenticación en toda la aplicación.
const auth = getAuth(app);//Obtiene la instancia de autenticación de Firebase.
const googleProvider = new GoogleAuthProvider();//Crea un proveedor de autenticación de Google para el inicio de sesión con Google.

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);//almacena la información del usuario actual.
    const [loading, setLoading] = useState(true);//Rastrea el estado de carga para las operaciones de autenticación.

    const createUser = (email, password) =>{//Crea un nuevo usuario con correo electrónico y contraseña.
        setLoading(true);//
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginwithGoogle = () =>{//Inicia el inicio de sesión con Google mediante una ventana emergente.
      setLoading(true);
      return signInWithPopup(auth, googleProvider)
    }
    const login = (email, password) => {//Inicia sesión con correo electrónico y contraseña.
      setLoading(true)
       return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {//Cierra la sesión del usuario.
      return signOut(auth)
    }

    useEffect(()=>{//Se ejecuta solo una vez después de que el componente se monta.
      const unsubscribe = onAuthStateChanged(auth, currenUser =>{
        //console.log(currenUser)
        setUser(currenUser)
        setLoading(false);
      });
      return () =>{
        return unsubscribe();
      }
    },[])
    const authInfo = {// Contiene información de autenticación para compartir a través del contexto.
        user,
        createUser,
        loginwithGoogle,
        loading,
        login,
        logOut
    }
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider