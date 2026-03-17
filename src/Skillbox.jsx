import React from 'react'
import ReactLogo from './assets/React.jpg'
import Tailwind from './assets/Tailwind.png'
function Skillbox(props) {
  return (
   <div className=' border p-4 w-auto rounded-xl'>
    <img src={props.logo} alt="" />
    <p> {props.Skill}</p>
   </div>
  )
}

export default Skillbox