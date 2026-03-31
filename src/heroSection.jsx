import React from 'react'
import GurpreetPhoto from './assets/gurpreet.jpeg'
import NavBar from './navBar';
function HeroSection() {
  return (
    <>
    
    <div className=' h-screen' ><NavBar />
    <div className="Hero flex justify-between mx-[5%] items-center mt-10 gap-2 ">
      <div className=' flex flex-col gap-2'>
        <p className=' text-xl '> Hi I'm  </p>
        <p className=' text-6xl font-mono'>Gurpreet Singh</p>
        <p className=' w-100'>Aspiring software engineer with a keen interest in developing innovative and user-centric applications. I enjoy tackling complex problems and leveraging modern technologies to deliver high-quality solutions.</p>
        <div className=' flex h-[30] gap-[1rem] mt-[1rem]'>
          <button className='bg-gradient-to-r from-blue-500 to-blue-300 text-white px-5 py-2 rounded-lg'> View My Work</button> <button className=' border opacity-50 p-3' > <a href="#Contact"> Contact Me</a></button>
        </div>
      </div>
    <img src={GurpreetPhoto} className=" w-[30vh]  h-auto border p-3 rounded-full" alt="" />

   
    </div></div>
    </>

  )
}

export default HeroSection;