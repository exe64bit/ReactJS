import React, { useState } from 'react'

function web() {

    const [formData, setFormData] = useState({})
    console.log(formData);
    

  return (
    <div className='flex flex-col gap-5 w-60 m-5 p-2'>
        <input className='border-2 p-2' onChange={(e)=> 
            setFormData({...formData, name: e.target.value})
         } type="text" placeholder='Name'/>

        <input className='border-2 p-2' onChange={(e)=> 
            setFormData({...formData, email: e.target.value})
         } type="text" placeholder='Email'/>

        <input className='border-2 p-2' onChange={(e)=> 
            setFormData({...formData, password: e.target.value})
         } type="text" placeholder='Password'/>
    </div>
  )
}

export default web