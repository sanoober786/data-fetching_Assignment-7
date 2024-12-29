import React from "react";
import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home (){
  return(
  <div >
    <Navbar/>
    <div className="flex  h-screen  bg-[#D1E8E2] px-[25px]  flex justify-center items-center">
      <div className="transition bg-[#116466] rounded-lg shadow-lg hover:shadow-xl hover:scale-[1.05] p-[50px]">
      <h1 className="text-[35px] font-bold text-[white]">Assignment-7</h1>
      <p className="text-[white] mt-[8px]">Welcome to the Data Fetching Application. Select a method to fetch a data!</p>
      <div className="justify-center items-center sm:flex-row sm:justify-end  gap-[10px] mt-[20px] flex flex-col">
        <button className="font-bold text-[18px] text-[black] w-full p-[8px] rounded-[8px] bg-[#D1E8E2]  hover:bg-[white] transition hover:shadow-xl hover:scale-[1.05]"><Link href={"/server-side"}>Server Side</Link></button>
        <button className="font-bold text-[18px] text-[black] w-full p-[8px] rounded-[8px] bg-[#D1E8E2] hover:bg-[white] transition hover:shadow-xl hover:scale-[1.05]"><Link href={"/client-side"}>Client Side</Link></button>
      </div>
      </div>
      </div>
    <Footer/>
  </div>
  );
}


