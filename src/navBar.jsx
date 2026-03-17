import React from 'react'

function navBar() {
  return (
   <>
     <div className="Nav flex justify-between bg-black text-white ">
        <h1 className=' text-4xl font-sans ps-4 '>Gurpreet Singh</h1>
        <ul className=' flex justify-around  gap-2'>
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