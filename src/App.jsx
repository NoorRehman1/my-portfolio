import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import AboutWithSkills from './components/About-me'
import ProjectsSection from './components/Projects'
import ContactSection from './components/Contact'
import Footer from './components/Footer'
import Herosection from './components/Herosection'
function App() {


  return (
    <>
      <Navbar/>
      <Herosection/>
      <AboutWithSkills/>
         <ProjectsSection/>
         <ContactSection/>
         <Footer/>


      </>
  )
}

export default App
