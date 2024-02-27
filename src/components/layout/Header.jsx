import React from 'react'
import { FaRegCircleCheck } from "react-icons/fa6";
import { TfiInfoAlt } from "react-icons/tfi";
import { GoChevronDown } from "react-icons/go";
import { FaAngleRight } from "react-icons/fa6";

function Header() {
  const currDay = new Date().getDate();
  const currMonth = new Date().toLocaleString([], {
    month: 'long',
  });
  const currYear = new Date().getFullYear();
  return (
    <>
      <div className='container mx-auto flex pt-3'>
        <p className='text-6xl'>Best Website builder in US</p>
      </div>
      {/* hr start*/}
      <div className='container mx-auto'>
        <hr class="w-full h-px mt-5 border-0 bg-black" />
      </div>
      <div className='container mx-auto mt-2 flex h-8'>
        <FaRegCircleCheck className='h-8 ml-2'/>
        <p className='text-xl ml-3'>Latest Updated - {currMonth} {currDay}, {currYear}</p>
        <div className='grid grid-cols-2 gap-96 justify-between'>
          <div className='flex'>
          <TfiInfoAlt className='ml-16 mt-2'/>
        <p className='mt-1 ml-2'>Advertising Disclosure</p>
          </div>
        <div className='flex justify-end'>
        <p className='mt-1 text-right'>Top Relevant</p>
        <GoChevronDown className='mt-1 w-9' size={25}/>
        </div>       
        </div>       
      </div>
      <div className='container mx-auto'>
        <hr class="w-full h-px mt-2 border-0 bg-black" />
      </div>
    {/* hr end */}
    <br/>
    <div className='flex container mx-auto gap-20'>
      <p className='ml-5'>Tools</p>
      <p>AWS Builder</p>
      <p>Start Build</p>
      <p>Build Supplies</p>
      <p>Tooling</p>
      <p>Blue Hosting</p>
    </div>
    <br/>
    <div className='container mx-auto flex gap-5 items-center'>
    <p>Home</p>
    <FaAngleRight/>
    <p>Hosting for all</p>
    <FaAngleRight/>
    <p>Hosting</p>
    <FaAngleRight/>
    <p>Hosting6</p>
    <FaAngleRight/>
    <p>Hosting5</p>
    </div>
    </>
  )
}

export default Header