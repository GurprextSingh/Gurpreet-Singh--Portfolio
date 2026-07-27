import React from 'react'

function navBar() {
  return (
    <>
    <div className=' flex bg-amber-200 h-[8vh] font-mono justify-between items-center px-[5vw]'>
      <div>
        <ul className=' flex text-2xl w-[30vmin] justify-between items-center'>
            <li>About</li>
            <li>Work</li>
            <li>Contact</li>
        </ul>
      </div>
      <div> Message </div>
    </div>
    </>
  )
}

export default navBar