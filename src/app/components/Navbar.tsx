
import Link from "next/link";
import React from "react";
export default function Navbar(){
  return(
    <header>
    <div className='w-full h-[80px] px-[20px] py-[10px] shadow-lg bg-[#116466] flex items-center sm:px-6 lg:px-8'>
        <h1 className="text-[35px] font-bold text-[white] w-full">Data Fetching</h1>
    <ul className='flex justify-end items-center gap-4 sm:gap-6 lg:gap-8 w-full text-[white] text-[14px] sm:text-[16px] lg:text-[18px] font-semibold'>
        <li className='relative group cursor-pointer'>
            <span className='group-hover:text-[#D1E8E2] transition-colors'><Link href={"/"}>Home</Link></span>
            <div className='absolute left-0 bottom-[-6px] w-0 h-[3px] bg-[#D1E8E2] group-hover:w-full transition-all'></div>
        </li>
        <li className='relative group cursor-pointer'>    
            <span className='group-hover:text-[#D1E8E2] transition-colors'><Link href={"/server-side"}>Server side</Link></span>
            <div className='absolute left-0 bottom-[-6px] w-0 h-[3px] bg-[#D1E8E2] group-hover:w-full transition-all'></div>
        </li>
        <li className='relative group cursor-pointer'>    
            <span className='group-hover:text-[#D1E8E2] transition-colors'><Link href={"/client-side"}>Client Side</Link></span>
            <div className='absolute left-0 bottom-[-6px] w-0 h-[3px] bg-[#D1E8E2] group-hover:w-full transition-all'></div>
        </li>
    </ul>
</div>
</header>
  )
}

