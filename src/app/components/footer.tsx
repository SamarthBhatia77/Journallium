import React from "react";
import Link from "next/link";
export default function Footer () {
    return (
        <div className="relative text-white w-full lg:mt-23 mt-9">
  <img src="/assets/footernew2.png" className="w-full lg:h-auto h-[200px]" alt="Footer Image" />

  {/* Overlay text container */}
  <div className="absolute inset-0 lg:mt-60">
    <p className="lg:text-4xl text-2xl font-bold lg:ml-30 lg:mt-0 mt-25 ml-5"><Link href="/">Journallium 📖</Link></p>
    <p className="lg:text-md text-[12px] lg:ml-30 lg:mt-5 ml-5">Journalling everyday, word by word, letter by letter.</p>
    <p className="lg:ml-30 lg:mt-15 text-[10px] ml-5 mt-8">&copy; 2025 Journallium - The Journalling platform</p>
  </div>
</div>
    );
}