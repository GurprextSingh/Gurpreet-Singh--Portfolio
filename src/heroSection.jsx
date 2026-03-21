import React from 'react'
import GurpreetPhoto from './assets/gurpreet.jpeg'
function heroSection() {
  return (
    <div className="Hero flex justify-around items-center mt-5 bg-black-50">
    <img src={GurpreetPhoto} className=" w-3/10  h-auto border p-3 rounded-full" alt="" />

    <div className="  bg-amber-300 py-50 rounded-xl justify-center" >
         <p className=' text-2xl'>Hi I'm</p>
        <h1 className=' text-4xl'>Gurpreet Singh</h1>
        <p> CSE Student Aspriring Software Development</p>
      
    </div>
    </div>

  )
}

export default heroSection;