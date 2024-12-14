
import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './componenets/Navbar'
import MyFooter from './assets/MyFooter'

function App() {//componente actúa como la raíz de la aplicación y gestiona el diseño general.

  return (
    <>
    <Navbar/>
    <div className='min-h-screen'>
      <Outlet/>
    </div>
    <MyFooter/>
    </>
  )
}

export default App
