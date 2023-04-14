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
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
