import React from 'react'
import { HiOutlineTrophy } from "react-icons/hi2";
import { Link } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function Cart() {
  return (
    <>
    <br/>
    {/* first card start */}
    <div className='container mx-auto items-center'>
        <div className='w-36'>
        <p className='border-black flex items-center rounded-r-lg gap-3 text-white bg-amber-500'>
            <HiOutlineTrophy className='ml-2'/>Best Choice</p>
        </div>       
    </div>
    <div className='container mx-auto'>
        
        <div className='grid grid-cols-8 gap-2'>
            <div className='col-start-1 col-end-3 flex'>
                <div className='text-slate-400'>
        <p className='text-2xl'>①</p>
        </div>
        <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqycFx41Vh8IrghTyCrGjzVMGfAnXgjcD2rw&s" alt="" />           
         <br />
            <p className='text-center'>Builder</p>
        </div>           
            </div>
            <div className='col-start-3 col-end-7'>
                <p className='text-black font-bold text-xl'>WixPro 72-Inch Responsive Website Builder-
            <span className=' font-normal'> Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)</span></p>
            <p className=' font-bold text-xl'>Main highlights</p>
            <p className='font-normal text-xl ml-6'>[What You Get]: Receive the WixPro website builder suite,
            access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.</p>
            <br />
            <Link className='text-sky-600'>Show more</Link>
            </div>
            <div className='col-start-7 col-end-9'>
                <div className='w-36 bg-teal-100 rounded-xl ml-20 h-36'>
                    <br/>
                    <p className='font-bold text-4xl text-center '>9.8</p>
                    <br />
                    <p className='text-center'>Exceptional</p>
                    <Stack spacing={1} className=' items-center'>
      <Rating name="size-small" defaultValue={5} size="small" />
      </Stack>
                </div>
                <br /><br />
                <button className=' bg-sky-600 w-full h-14 rounded-xl text-white'>View</button>
            </div>
        </div>
    </div>
    {/* first card end */}
    <br /><br />
    {/* second div start */}
    <div className='container mx-auto items-center'>
        <div className='w-36'>
        <p className='border-black flex items-center rounded-r-lg gap-3 text-white bg-amber-500'>
            <HiOutlineTrophy className='ml-2'/>Best Value</p>
        </div>       
    </div>
    <div className='container mx-auto'>       
        <div className='grid grid-cols-8 gap-2'>
            <div className='col-start-1 col-end-3 flex'>
                <div className='text-slate-400'>
        <p className='text-2xl'>②</p>
        </div>
        <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqycFx41Vh8IrghTyCrGjzVMGfAnXgjcD2rw&s" alt="" />           
       <br />
        <p className='text-center'>Builder</p>
        </div>           
            </div>
            <div className='col-start-3 col-end-7'>
                <p className='text-black font-bold text-xl'>SiteCraft 68-Inch Ultimate Web Design Studio-
            <span className=' font-normal'> Advanced site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)</span></p>
            <p className=' font-bold text-xl'>Main highlights</p>
            <p className='font-normal text-xl ml-6'>[What You Get]: Gain access to the SiteCraft design studio, featuring a robot selection of design elements, SEO optimization tools, and e-commerce integrations.</p>
            <br />
            <Link className='text-sky-600'>Show more</Link>
            </div>
            <div className='col-start-7 col-end-9'>
                <div className='w-36 bg-teal-100 rounded-lg ml-20 h-36'>
                    <br/>
                    <p className='font-bold text-4xl text-center '>9.5</p>
                    <br />
                    <p className='text-center'>Exceptional</p>
                    <Stack spacing={1} className=' items-center'>
      <Rating name="size-small" defaultValue={4.5} size="small" />
      </Stack>
                </div>
                <br /><br />
                <button className=' bg-sky-600 w-full h-14 rounded-xl text-white'>View</button>
            </div>
        </div>
    </div>
    {/* second cart end */}
    {/* third cart start */}
<br /><br />
    <div className='container mx-auto'>
        
        <div className='grid grid-cols-8 gap-2'>
            <div className='col-start-1 col-end-3 flex'>
                <div className='text-slate-400'>
        <p className='text-2xl'>③</p>
        </div>
        <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqycFx41Vh8IrghTyCrGjzVMGfAnXgjcD2rw&s" alt="" />           
         <br />
            <p className='text-center'>Builder</p>
        </div>           
            </div>
            <div className='col-start-3 col-end-7'>
                <p className='text-black font-bold text-xl'>WixPro 72-Inch Responsive Website Builder-
            <span className=' font-normal'> Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)</span></p>
            <p className=' font-bold text-xl'>Main highlights</p>
            <p className='font-normal text-xl ml-6'>[What You Get]: Receive the WixPro website builder suite,
            access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.</p>
            <br />
            <Link className='text-sky-600'>Show more</Link>
            </div>
            <div className='col-start-7 col-end-9'>
                <div className='w-36 bg-teal-100 rounded-xl ml-20 h-36'>
                    <br/>
                    <p className='font-bold text-4xl text-center '>9.3</p>
                    <br />
                    <p className='text-center'>Exceptional</p>
                    <Stack spacing={1} className=' items-center'>
      <Rating name="size-small" defaultValue={5} size="small" />
      </Stack>
                </div>
                <br /><br />
                <button className=' bg-sky-600 w-full h-14 rounded-xl text-white'>View</button>
            </div>
        </div>
    </div>
    <br /><br />
    {/* third cart end */}
    {/* fourth card start */}
    <div className='container mx-auto'>
        
        <div className='grid grid-cols-8 gap-2'>
            <div className='col-start-1 col-end-3 flex'>
                <div className='text-slate-400'>
        <p className='text-2xl'>④</p>
        </div>
        <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqycFx41Vh8IrghTyCrGjzVMGfAnXgjcD2rw&s" alt="" />           
         <br />
            <p className='text-center'>CDK</p>
        </div>           
            </div>
            <div className='col-start-3 col-end-7'>
                <p className='text-black font-bold text-xl'>CDK Responsive Builder-
            <span className=' font-normal'> An extensive library of widgets and apps, and detailed step-by-step guides</span></p>
            <p className=' bg-slate-300 text-slate-700 w-16 text-center rounded-md'>26% Off</p>
            <p className=' font-bold text-xl'>Main highlights</p>
            <div className='h-24 w-[590px] bg-red-100 ml-5 rounded-xl p-1'>
                <p className=' text-blue-500 text-xl ml-3'>9.9 <span className=' text-gray-600'>Building Responsive</span></p>
                <p className=' text-blue-500 text-xl ml-3'>8.9 <span className=' text-gray-600'>Cool</span></p>
                <p className=' text-blue-500 text-xl ml-3'>8.9 <span className=' text-gray-600'>Docs</span></p>            
            </div>
            <br />
            <p className='text-xl'>Why we love it</p>
            <p><CheckCircleIcon color="primary"/><span className=' ml-1 text-center'> Documentation</span></p>
            <p><CheckCircleIcon color="primary"/><span className=' ml-1 text-center'> Easy Use</span></p>
            <CheckCircleIcon color="primary"/><span className=' ml-1 text-center'> Out Of Box</span>
            
            <br />
            <Link className='text-sky-600'>Show more</Link>
            </div>
            <div className='col-start-7 col-end-9'>
                <div className='w-36 bg-teal-100 ml-20 h-36 rounded-xl'>
                    <br/>
                    <p className='font-bold text-4xl text-center '>9.3</p>
                    <br />
                    <p className='text-center'>Exceptional</p>
                    <Stack spacing={1} className=' items-center'>
      <Rating name="size-small" defaultValue={5} size="small" />
      </Stack>
                </div>
                <br /><br /><br /><br /><br /><br />
                <button className=' bg-sky-600 w-full h-14 text-white rounded-xl'>View</button>
            </div>
        </div>
    </div>
    {/* fourth card end */}
    <br /><br /><br /><br />
    <div className='container mx-auto text-4xl'>Related deals you might like for</div>
    <br /><br />
    <div className='container mx-auto pl-10 grid grid-cols-3 gap-5'>
        <div className='col-start-1 col-end-2'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqycFx41Vh8IrghTyCrGjzVMGfAnXgjcD2rw&s" alt="" />
       <div className='flex gap-2'><p className='text-blue-400 rounded-lg bg-blue-50 w-16'>20% Off </p>
       <p className='text-blue-400 bg-blue-50 w-24 rounded-lg'>Limited time</p>
       </div>
       <p className=' ml-20 font-semibold text-lg'>Webbuilder 1</p>
       <p className=' text-lg'>Computer Modern classic with wix</p>
       <p className=' text-lg'> support</p>
        <div className='flex gap-3'>
            <p className=' text-xl font-normal text-slate-600'>$39.96</p>
            <p className='font-normal text-slate-600 mt-1'>$49.96</p>
            <p className=' text-red-600 mt-1'>(20% Off)</p>       
        </div>
        <button className=' bg-sky-600 w-80 h-14 text-white rounded-xl'>View Deals</button>            
        </div>
        <div className='col-start-2 col-end-3'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqycFx41Vh8IrghTyCrGjzVMGfAnXgjcD2rw&s" alt="" />
       <div className='flex gap-2'><p className='text-blue-400 rounded-lg bg-blue-50 w-16'>20% Off </p>
       <p className='text-blue-400 bg-blue-50 w-24 rounded-lg'>Limited time</p>
       </div>
       <p className=' ml-20 font-semibold text-lg'>Webbuilder 1</p>
       <p className=' text-lg'>Computer Modern classic with wix</p>
       <p className=' text-lg'> support</p>
        <div className='flex gap-3'>
            <p className=' text-xl font-normal text-slate-600'>$39.96</p>
            <p className='font-normal text-slate-600 mt-1'>$49.96</p>
            <p className=' text-red-600 mt-1'>(20% Off)</p>       
        </div>
        <button className=' bg-sky-600 w-80 h-14 text-white rounded-xl'>View Deals</button>            
        </div>
        <div className='col-start-3'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqycFx41Vh8IrghTyCrGjzVMGfAnXgjcD2rw&s" alt="" />
       <div className='flex gap-2'><p className='text-blue-400 rounded-lg bg-blue-50 w-16'>20% Off </p>
       <p className='text-blue-400 bg-blue-50 w-24 rounded-lg'>Limited time</p>
       </div>
       <p className=' ml-20 font-semibold text-lg'>Webbuilder 1</p>
       <p className=' text-lg'>Computer Modern classic with wix</p>
       <p className=' text-lg'> support</p>
        <div className='flex gap-3'>
            <p className=' text-xl font-normal text-slate-600'>$39.96</p>
            <p className='font-normal text-slate-600 mt-1'>$49.96</p>
            <p className=' text-red-600 mt-1'>(20% Off)</p>       
        </div>
        <button className=' bg-sky-600 w-80 h-14 text-white rounded-xl'>View Deals</button>            
        </div>       
    </div>
    <br /><br /><br /><br />
    <div className='container mx-auto text-3xl flex font-normal justify-around text-slate-600'>
        <p className=' text-center'>Sign up and get exclusive <br />special deals</p>
    <button className=' text-white rounded-r-2xl text-sm w-24 h-14 bg-blue-500'>Sign Up</button>
    </div>
    <br /><br />
    </>
  )
}

export default Cart