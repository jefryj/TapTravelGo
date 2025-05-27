import { useState } from 'react'
import Home from './pages/Home.jsx'
import Footer from './pages/Footer'
import Header from './pages/Header'
import Contact from './pages/Contact.jsx'
import AboutUs from './pages/AboutUs.jsx'


function App() {
  return (
    <>
      <Header/>
      <div id="home">
        <Home/>
      </div>
      <div id="aboutus">
        <AboutUs/>
      </div>
      <div id="contact">
        <Contact/>
      </div>
      <Footer/>
    </>
  )
}

export default App
