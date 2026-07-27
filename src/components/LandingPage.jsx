import React from 'react'
import NavBar from './NavBar'
function LandingPage() {
  return (
    <div>
    <NavBar/>
    <div className='   h-[50vh]  bg-amber-100 flex flex-col items-center justify-center '>
        <p className=' '>Heloo! I'm  Gurpreet Singh - Based In Chandigarh</p>
    <p className=' text-7xl font-bold font-mono'> Full Stack Developer</p>

    </div>
    <hr className=' top-10 relative' />
    <div>
      <button className=' bg-green-300 '> View Work</button>
    </div>
    
  </div>
  )
}

export default LandingPage