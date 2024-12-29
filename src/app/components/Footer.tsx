import React from "react";
import Link from "next/link";
import Image from "next/image";
const Footer = () => {
    return(
          <footer className="bg-[#116466] text-white p-4 text-center items-end">
             <div className="w-full  gap-[40px] flex flex-col text-[white] ">
           <p className="font-semibold text-base sm:text-lg leading-7 mt-2">
           <u className="underline text-lg sm:text-xl">
                 Get in Touch With Me </u>
                     <br />
                        <i className="underline"> Email :</i>   <Link href={"mailto:muhammadkashif462003@gmail.com"}> [muhammadkashif462003@gmail.com] </Link>
                     <br />
                        <i className="underline">LinkedIn :</i> <Link href="https://www.linkedin.com/in/sanoober-sadhayo-5311b82b5" target="_blank">www.LinkedIn.com</Link>
                     <br />
                        <i className="underline"> GitHub :</i> <Link href="https://github.com/sanoober786" >[https://github.com/sanoober786]</Link>
                     </p>
                  <div className="justify-between flex flex-col sm:flex-row border-solid border-[white] border-t-[2px] pt-2 items-end gap-8 ">
                    <div className="flex flex-col sm:flex-row gap-6 items-center">
                           <p className="text-sm sm:text-base">&copy; 2024 Data Fetching. All right reserved.</p>
                        <Link href={'/'} className="text-sm sm:text-base underline">Privacy Policy</Link>
                           <Link href={'/'} className="text-sm sm:text-base underline">Terms of Services</Link>
                         <Link href={'/'} className="text-sm sm:text-base underline">Cookies Settings</Link>
                       </div>
                       <div className="w-[132px] h-[24px] items-center flex gap-[8px]">
                            <div className="w-[24px] h-[24px] items-center flex justify-center mr-[12]"><Image src={'/icon4.png'} alt="1" width={24} height={24}/></div>
                            <div className="w-[24px] h-[24px] items-center flex justify-center mr-[12]"><Image src={'/icon3.png'} alt="2" width={24} height={24}/></div>
                            <div className="w-[24px] h-[24px] items-center flex justify-center mr-[12]"><Image src={'/icon2.png'} alt="3" width={24} height={24}/></div>
                            <div className="w-[24px] h-[24px] items-center flex justify-center mr-[12]"><Image src={'/icon1.png'} alt="4" width={24} height={24}/></div>
                     </div>
                </div>
           </div>
    </footer>
    );
}
export default Footer;