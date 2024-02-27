import React from 'react'
import { Link } from 'react-router-dom'
import { GoChevronDown } from "react-icons/go";
function Footer() {
  return (
    <div className=' bg-slate-800 m-3   h-[400px]'>
        <br /><br />
        <div className='container mx-auto text-center grid grid-cols-4'>
            <div className='col-start-1 col-end-2'>
                <p className='text-white'>CATEGORIES</p><br />
                <Link className=' text-slate-400'>Web Builder</Link><br /><br />
                <Link className=' text-slate-400'>Hosting</Link><br /><br />
                <Link className=' text-slate-400'>Data Center</Link><br /><br />
                <Link className=' text-slate-400'>Robotic-Automation</Link><br /><br />
            </div>
            <div className='col-start-2 col-end-3'>
            <p className='text-white'>CONTACT</p><br />
                <Link className=' text-slate-400'>Contact</Link><br /><br />
                <Link className=' text-slate-400'>Privacy Policy</Link><br /><br />
                <Link className=' text-slate-400'>Terms Of Service</Link><br /><br />
                <Link className=' text-slate-400'>Categories</Link><br /><br />
                <Link className=' text-slate-400'>About</Link><br /><br />
            </div>
            <div className='col-start-3 flex'>
            <Link className=' text-slate-400 ml-44 mt-11'>United States</Link>
            <GoChevronDown className='w-9 text-slate-400 mt-12' size={25}/>
            </div>
        </div>
    </div>
  )
}

export default Footer