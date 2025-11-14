import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Project from './components/Project'
import Footer from './components/Foter'

function App() {

  return (
    <>
    <Navbar/>
    <Home/>
    <About/>
    <Project/>
    <Footer/>
    </>
  )
}

export default App
