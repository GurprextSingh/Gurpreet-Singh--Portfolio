import React from 'react'

import HeroSection from './heroSection'
import Skills from './skills'
import Contact from './contact'
import Project from './project'
function App() {

  return (
    < >
   <div className=' bg-black text-white'>   <HeroSection/>
     <section id='Skills' className='section'><Skills /></section>
     <section id='Projects' className='section'><Project /></section>
     <section id='Contact' className='section'> <Contact /></section>
     </div>
   
  
    </>
  )
}

export default App
