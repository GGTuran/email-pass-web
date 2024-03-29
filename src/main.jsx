import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root.jsx';
import Home from './Components/Home.jsx';
import Login from './Components/Login.jsx';
import Register from './Components/Register.jsx';
// import AuthProvider from './Provider/AuthProvider.jsx';
import { RealContext } from './Provider/RealProvider.jsx';
// import AuthProvider from './Provider/AuthProvider.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
        {
          path:"/",
          element:<Home></Home>
        },
        {
          path:"/login",
          element:<Login></Login>
        },
        {
          path:"register",
          element:<Register></Register>
        }

    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
  
  
  <RouterProvider router={router} />
  
  
   
  </React.StrictMode>,
)
