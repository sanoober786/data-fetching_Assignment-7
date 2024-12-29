"use client"  
import Navbar from "../components/Navbar"
import React, { useEffect, useState } from "react"
import Footer from "../components/Footer"
import Image from "next/image"


type Data = {
    id : number;
    description : string;
    category : string;
    image : string;
    price : number;
    title : string;
}


const ClientSide = ()=> {
    const [data , setData] = useState<Data[]>([])
    const [loading , setLoading] = useState(false)

    useEffect(()=>{
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
        },3000)
        const fetchData =  async()=> {
            const url = await fetch("https://fakestoreapi.com/products")
            const parsedData : Data[] = await url.json()
            setData(parsedData)
        }
        fetchData()
    }, [])
    return (
        <div className="bg-[#D1E8E2] h-screen">
            <Navbar/>
            {loading? (
                <div className="h-screen items-center justify-center px-[20ox] sm:px-[0px] flex flex-col ">
                     <div className="w-[80px] h-[80px] rounded-full mt-4 animate-spin border-[10px] border-[lightgray] border-t-[10px] border-t-[gray] shadow-lg">
                    </div>
                    <h1 className="text-[25px] mt-4 animate-bounce text-blue-700">Loading...</h1>
                </div>
            ) : (
                <div className="px-[20px] py-[50px] md:px-[40px] sm:px-[30px] lg:px-[50px] bg-[#D1E8E2]">
                    <h1 className="text-center text-[20px] mb-[40px] font-bold sm:text-[28px] md:text-[30px] text-[#116466]">Client Side Data Fetching</h1>
                    <h1 className="text-center text-[20px] mb-[40px] font-bold sm:text-[28px] md:text-[30px] text-[#116466]">Total Products : 20</h1>
                    <div className="grid gap-[30px] sm:grid-cols-2 lg:grid-cols-3">
                        {data.map((products,index) =>(
                            <div key={index} className="w-full p-[20px] rounded-[8px] bg-[white] transform-3d rotate-x-51 rotate-z-43 transition-all shadow-xl duration-500 hover:translate-y-4 hover:rotate-x-49 hover:rotate-z-38 hover:shadow-2xl">
                                <div className="h-[180px] ">
                                    <Image src={products.image} alt={products.title} width={100} height={100} className="mx-auto size-[180px]"/>               
                                 </div>
                                 <p className="text-[gray] mt-[50px] mb-[8px] capitalize">{products.category}</p>
                                 <p className="text-[20px] mb-[8px] font-bold">{products.title}</p>
                                 <p className="line-clamp-2 mb-[8px] text-gray">{products.description}</p>
                                 <p className="text-[20px] mb-[8px] font-semibold">{products.price}</p>
                                 <div className="flex justify-end items-center">
                                    <button className="text-[white] text-[18px] py-[7px] px-[12px] rounded-[30px] hover:bg-[darkgreen] bg-[darkblue]">Buy Now</button>
                                 </div>
                            </div>

                        ))}
                    </div>
                </div>
            )
        }
        <Footer/>
        </div>
    )
}
export default ClientSide;