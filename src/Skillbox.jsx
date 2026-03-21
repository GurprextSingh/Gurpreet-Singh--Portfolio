import React from 'react'
import ReactLogo from './assets/React.jpg'
import Tailwind from './assets/Tailwind.png'
function Skillbox(props) {
  return (
   <div className='  flex flex-col  p-2 h-30 w-25 rounded-xl text-center font-mono gap-1'>
    <img src={props.logo} alt="" className=' h-15 w-15 border p-2' />
    <p> {props.Skill}</p>
   </div>
  ) 
}

export default Skillbox