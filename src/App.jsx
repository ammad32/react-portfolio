import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Service from './components/Service'
import Contact from './components/Contact'
import Footer from './components/Footer'





function App() {
  
  return (
    <>
<Navbar/>
<Hero/>
<About/>
<Skills />
<Service />
<Contact />
<Footer />

    </>
  )
}

export default App
