import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './routes/Root';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import AuthProvider from './Components/AuthProvider/AuthProvider';


const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
   children: [
    {
      path:'/',
      element:<Home>
      </Home>,
      children:[
        
      ]

    },

    {
      path:'/login',
      element:<Login></Login>
    },
    {
      path:'/register',
      element:<Register></Register>
    }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
 <AuthProvider>
   <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
 </AuthProvider>
)
