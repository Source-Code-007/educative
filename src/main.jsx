import React from 'react'
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App'
import './index.css'
import Homepage from './Component/Homepage/Homepage';
import About from './Component/About/About';
import SignIn from './Component/SignIn/SignIn';
import Register from './Component/Register/Register';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Homepage></Homepage>
      },
      {
        path: '/home',
        element: <Homepage></Homepage>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/signin',
        element: <SignIn/>
      },
      {
        path: '/register',
        element: <Register/>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
