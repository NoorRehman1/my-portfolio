import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import { Button } from './components/ui/button'
import Navbar from './components/Navbar'
import HeroSection from './components/Hero-section'
// import AboutMe from './components/About'
import AboutWithSkills from './components/About-me'
import ProjectsSection from './components/Projects'
import ContactSection from './components/Contact'
import Footer from './components/Footer'
function App() {


  return (
    <>
      <Navbar/>
      <HeroSection/>
      {/* <AboutMe/> */}
      <AboutWithSkills/>
         <ProjectsSection/>
         <ContactSection/>
         <Footer/>


      </>
  )
}

export default App
