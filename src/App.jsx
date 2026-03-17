import React from 'react'
import './App.css'
import HeroSection from './heroSection'
import Skills from './skills'
import Contact from './contact'
import Project from './project'
function App() {

  return (
    <>
     <section id='Skills' className='section'><Skills /></section>
     <section id='Projects' className='section'>P<Project /></section>
     <section id='Contact' className='section'> <Contact /></section>
     
    </>
  )
}

export default App
