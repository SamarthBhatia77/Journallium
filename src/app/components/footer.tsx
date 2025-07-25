import React from "react";
import Link from "next/link";
export default function Footer () {
    return (
        <div className="relative text-white w-full lg:mt-23 mt-9">
  <div className='relative '>
        <img src="/assets/footerimg.png" className='w-full lg:h-[470px] h-[250px]'></img>
        <div className="w-full absolute top-0 left-0  lg:mt-10 mt-3 text-white">
            <p className="lg:ml-8 ml-6 lg:text-[90px] mb-5 font-mono text-3xl"><Link href="">Journallium</Link></p>
            <hr className="border border-white lg:w-[450px] w-[200px] lg:mb-6 mb-2"></hr>
            <p className="lg:ml-8 ml-6 lg:text-2xl text-[14px]">Journal writing is a voyage to the interior ✨</p>
            <div className="flex lg:gap-25 lg:gap-10 gap-13  lg:ml-8 ml-8 lg:mt-3 lg:mt-3 mt-1 lg:text-[15px] text-[12px] ">
              <div>
                <p className="lg:my-6 my-3"><Link href="">Contact us</Link></p>
                <p className="lg:my-6 my-3"><Link href="">About</Link></p>
                <p className="lg:my-6 my-3"><Link href="">Contribute</Link></p>
              </div>
              <div>
                <p className="lg:my-6 my-3"><Link href="">Home</Link></p>
                <p className="lg:my-6 my-3"><Link href="">View Entries</Link></p>
                <p className="lg:my-6 my-3"><Link href="">Social Media</Link></p>
              </div>
            </div>
            <p className="ml-8 lg:text-[15px] mt-2 text-[7px]">&copy; 2025 - Journallium | Your daily journalling app</p>
        </div>
        </div>
</div>
    );
}