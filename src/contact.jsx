import React from 'react'

function contact() {
  return (
    
    <div className="form border-2 rounded-xl h-2.4/5 w-1.4/6 ">
        <h1 className=' text-2xl  text-center'> Contact Me</h1>
        <form action="" className=" space-x-6 bg-amber-100 m-2 p-2" >
            <p>Name:</p>
            <input type="text" id='Name' placeholder='John Doe' className=' bg-amber-700 p-1 border-black w-full text-white  ' />
            <p>Email:</p>
            <input type="email" id='email' placeholder='Johndoe@gmail.com' className=' bg-amber-700 p-1 border-black w-full text-white'/>
            <p>Message:</p>
            <textarea name="msg" id="msg" placeholder='Enter Your Message Here...' className='w-full p-2 border rounded-md h-32 resize-none'></textarea>
            <input type="submit" value="Submit" className='  rounded-3xl p-1.5 text-center border-2 ' />
        </form>
     </div>


  )
}

export default contact