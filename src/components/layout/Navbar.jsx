import React from 'react'
import { IoIosSearch } from "react-icons/io";

function AB() {
  return (
      <nav className='bg-black flex p-3'>
        <div className='container mx-auto'>         
        </div>
        <div className='container mx-auto flex'>
        <button  className='flex bg-white rounded-l-lg'>
    <IoIosSearch className='ml-2 mt-2 size-6'/>
    
    </button>
    <input
    className='h-10 rounded-r-lg w-52'     
     type="text"
     />
        </div>
        <div className='container mx-auto text-white flex justify-between'>
        <button >Categories</button>
        <button className='mr-12'>Website Builders</button>
        
        </div>
        <div className='container mx-auto text-white ml-9 mt-2'>
        <button> Today's deals</button>
        </div>
      </nav>
  )
}

export default AB