"use client"
import Image from "next/image"
import { useState } from "react";
import Link from "next/link";
import {BsSearch} from 'react-icons/bs'
import { TfiAlignJustify } from "react-icons/tfi";
const Navbar = () => {
  const [menu, setMenu]=useState(false)
  return (
    <div>
      <div className="sm:hidden flex justify-center"> 
        <Image
          src='/navbar-logo.png'
          width={190}
          height={60}
          alt='logo'
          className='cursor-pointer block '/>
        </div>
      <div className="max-sm:hidden w-full pr-5 py-0 flex justify-between items-center text-white shadow-sm max-sm:pl-20">    
        <Image
          src='/navbar-logo.png'
          width={190}
          height={60}
          alt='logo'
          className='cursor-pointer block '/>
        <div className='flex gap-6 pl-35 max-sm:hidden'>
          <Link href="/" className='cursor-pointer text-white hover:text-[#FAB326] transition duration-200'>Home</Link>
          <Link href="#tour" className='cursor-pointer text-white hover:text-[#FAB326] transition duration-200'>Tours</Link>
          <Link href="#hotel" className='cursor-pointer text-white hover:text-[#FAB326] transition duration-200'>Hotel</Link>
          <Link href="#blog" className='cursor-pointer text-white hover:text-[#FAB326] transition duration-200'>Blog</Link>
          <Link href="#about" className='cursor-pointer text-white hover:text-[#FAB326] transition duration-200'>About</Link>
          <Link href="#contact" className='cursor-pointer text-white hover:text-[#FAB326] transition duration-200'>Contact</Link>
        </div>
     <div className='flex items-center gap-2 max-sm:hidden'>
       <div className="relative">
        <BsSearch className="absolute left-2 top-1/2 -translate-y-1/2 w-5 h-5 text-white " />
        <input
         className="w-[140px] pl-10 pr-2 py-2 rounded-lg  placeholder-white text-white   focus:ring-2 outline-none"
         type="text"
         placeholder="Search"/>
       </div> 
       <button className='btn cursor-pointer'>Sign In</button>
       </div>
      </div>
    <div className="flex justify-end sm:hidden -mt-11 pr-5 text-white cursor-pointer">
       <TfiAlignJustify
       onClick={()=>setMenu(true)}/>  
     </div>     
     {menu && ( 
     <div className="fixed top-0 right-0 h-screen w-64
     bg-white z-[999] flex flex-col text-black">
     <div className="flex justify-end p-4">
           <span className="text-2xl cursor-pointer text-black"
            onClick={()=>setMenu(false)}>✕</span>
      </div>
  <div className="flex flex-col gap-5 px-6 mt-4 text-black">
    <Link href="/" className="cursor-pointer hover:text-[#FAB326] transition duration-400">Home</Link>
    <Link href="#tour" className="cursor-pointer hover:text-[#FAB326] transition duration-400">Tours</Link>
    <Link href="#hotel" className="cursor-pointer hover:text-[#FAB326] transition duration-400">Hotel</Link>
    <Link href="#blog" className="cursor-pointer hover:text-[#FAB326] transition duration-400 ">Blog</Link>
    <Link href="#about" className="cursor-pointer hover:text-[#FAB326] transition duration-400 ">About</Link>
    <Link href="#contact" className="cursor-pointer hover:text-[#FAB326] transition duration-400 ">Contact</Link>
  </div>
   <div className="flex items-center px-6 mt-2 relative">
    <BsSearch className="absolute left-10 top-4 -translate-y-1 w-5 h-5 text-black"/>
    <input className="w-full p-2 rounded-lg left-10 placeholder: pl-11 text-xl pb-2 " placeholder="Search" />
    </div>
   <div>
    <button className="btn w-[80%] mt-5 ml-8">Sign In</button>
    </div>
  </div>
  )}  
  </div>
 )}
export default Navbar