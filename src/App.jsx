import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Project from './components/Project'
import Footer from './components/Foter'
import Achievement from "./components/Achievement";

function App() {

  return (
    <>
    <Navbar/>
    <Home/>
    <About/>
    <Project/>
    <Achievement />
    <Footer/>
    </>
  )
}

export default App
