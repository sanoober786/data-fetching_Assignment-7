
import React from "react";  
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

type Data = {
  type : string;
  name : string;
  id : number;
  available : boolean
}

const ServerSide = async() => {
  const url = await fetch("https://simple-books-api.glitch.me/books/")
  const data: Data[]  = await url.json()

   return(
    <div>
      <Navbar/>
      <div className="px-[20px] py-[50px] lg:px-[50px] md:px-[40px] sm:px-[30px] bg-[#D1E8E2]">
        <h1 className="text-[20px] text-center mb-[40px] font-bold sm:text-[28px] md:text-[30px] text-[#116466]">Server Side Data Fetching</h1>
        <h3 className="text-[18px] text-center mb-[40px] font-bold sm:text-[28px] md:text-[30px] text-[#116466]">Total Books : 06</h3>
        <div className="grid gap-[30px] sm:grid-cols-2 lg:grid-cols-3">
          {data.map((todo , index) => (
            <div key={index} className="w-full shadow-lg p-[20px] rounded-[8px] hover:shadow-xl hover:scale-[1.05] transition bg-[white]">
              <p className="font-bold text-[24px] mb-[10px] text-[#116466]">{todo.name}</p>
              <p className="mb-[8px] text-[#116466]"><span className="font-bold">ID : </span>{todo.id}</p>
              <p className="mb-[8px] text-[#116466]"><span className="font-bold">Type : </span>{todo.type}</p>
              <p className={`${todo.available == true? "text-[green]" : "text-[red]"} font-semibold`}>{todo.available == true? "Available" : "Not Available"}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
    
   )
}
export default ServerSide ;


