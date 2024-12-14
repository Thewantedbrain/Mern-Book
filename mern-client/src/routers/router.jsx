import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import App from "../App";
import Home from "../home/Home";
import Shop from "../shop/Shop";
import About from "../componenets/About";
import Blog from "../componenets/Blog";
import SingleBook from "../shop/SingleBook";
import Dashboard from "../dashboard/DashboardLayout";
import DashboardLayout from "../dashboard/DashboardLayout";
import UploadBook from "../dashboard/UploadBook";
import ManageBook from "../dashboard/ManageBook";
import EditBook from "../dashboard/EditBook";
import SignUp from "../componenets/SignUp";
import Login from "../componenets/Login";
import PrivateRoute from "../assets/PrivateRoute/PrivateRoute";
import Logout from "../componenets/Logout";
import { Report } from "../componenets/Report";
import { Geo } from "../componenets/Geo";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
            path: '/',
            element:<Home/>
        },
        {
            path: "/shop",
            element: <Shop />,
            
        },{
            path: "/about",
            element:<About/>
        },{
            path:'/report',
            element:<Report/>
        },{
            path:'/geo',
            element:<Geo/>
        },{
            path: "/blog",
            element: <Blog />
        },{
          path: "/book/:id",
          element: <SingleBook/>,
          loader: ({params}) => fetch(`http://localhost:5000/book/${params.id}`)
        }
      ]
    },{
      path:"/admin/dashboard",// URL a la que se asocia la ruta.
      element:<DashboardLayout/>,// Indica el componente a renderizar cuando se accede a la ruta.
      children:[//Permite anidar rutas dentro de otras rutas, creando una jerarquía.
          {
            path:"/admin/dashboard",
            element:<PrivateRoute></PrivateRoute>
          },
          {
          path:"/admin/dashboard/upload",
          element:<UploadBook/>
        },{
          path:"/admin/dashboard/manage",
          element:<ManageBook/>
        },{
          path:"/admin/dashboard/edit-books/:id",
          element:<EditBook/>,
          loader: ({params}) => fetch(`http://localhost:5000/book/${params.id}`)
        }  
      ]
    },{
      path:"sign-up",
      element:<SignUp/>
    },{
      path:"login",
      element: <Login/>
    },{
      path:"logout",
      element:<Logout/>
    }
     
    
  ]);
  export default router;