import React from 'react'

function navBar() {
  return (
   <>
     <div className="Nav flex justify-between bg-gray-900 text-white h-[8vh] items-center ">
        <h1 className=' text-4xl font-sans ps-4 '>G</h1>
        <ul className=' flex justify-around  gap-[4rem]'>
            <li>
                <a href="#Skills">Skills</a>
            </li>
            <li>
                <a href="#Projects">Projects</a>
            </li>
            <li>
                <a href="#Contact">Contact Me</a>
            </li>
           
        </ul>
     </div>
    
   </>
  )
}

export default navBar;