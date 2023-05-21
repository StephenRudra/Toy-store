
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";
import Add from "../Pages/Add/Add";
import Blog from "../Pages/Home/Blog/Blog";
import Details from "../Pages/Details/Details";
import AllToys from "../Pages/All Toys/AllToys";
import MyToys from "../Pages/My toys/MyToys";
import PrivateRoute from "./PrivateRoute";
import Error from "../Error/Error";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: '/',
            element: <Home></Home>,
            loader: ()=> fetch('https://toy-server-tawny.vercel.app/toys')
        },
        {
          path: 'all',
          element: <AllToys></AllToys>,
          loader: ()=> fetch('https://toy-server-tawny.vercel.app/toys')
        },
        {
          path: '/sign',
          element: <SignUp></SignUp>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/add',
          element: <Add></Add>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: 'details/:id',
          element: <Details></Details>,
          loader: ({params})=> fetch(`https://toy-server-tawny.vercel.app/toys/${params._id}`)
        },
        {
          path: 'mytoys',
          element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
        },{
          path:"*",
          element: <Error></Error>
        }
      ]
    },
  ]);

  export default router;