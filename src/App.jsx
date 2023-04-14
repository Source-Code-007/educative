import { useState } from 'react'
import './App.css'
import Navbar from './Component/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Component/Footer/Footer'

function App() {

  return (
    <>
    <Navbar></Navbar>
    <Outlet></Outlet>
    <Footer></Footer>
    </>

  )
}

export default App