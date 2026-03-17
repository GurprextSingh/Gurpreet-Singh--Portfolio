import React from 'react'

function contact() {
  return (
    
    <div className="form border-2 rounded-xl h-2.4/5 w-1.4/6 h-">
        <h1 className=' text-2xl  text-center'> Contact Me</h1>
        <form action="" className=" space-x-6 bg-amber-100 m-2 p-2" >
            <p>Name:</p>
            <input type="text" id='Name' placeholder='John Doe' className=' bg-amber-300 p-1 border w-full ' />
            <p>Email:</p>
            <input type="email" id='email' placeholder='Johndoe@gmail.com' className=' bg-blue-200 p-1 border w-full'/>
            <p>Message:</p>
            <textarea name="msg" id="msg" placeholder='Enter Your Message Here...' className='w-full p-2 border rounded-md h-32 resize-none'></textarea>
            <input type="submit" value="Submit" className=' border rounded-xl p-0.5 text-center bg-amber-100' />
        </form>
     </div>


  )
}

export default contact