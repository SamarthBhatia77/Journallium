'use client'
import React,{useState,useEffect} from 'react'
import Link from 'next/link';
export default function Navbar () {
    return (
        <div className='fixed top-0 left-0 w-full z-50 flex justify-between p-5 bg-[#785f36]/80 backdrop-blur-md items-center align-center'>
            <div className='font-bold lg:text-3xl text-4xl text-white'>
                <p className=''><Link href="/">Journallium 📖</Link></p>
            </div>
            <div className='lg:flex lg:gap-8 mt-3 text-white'>
                <p className='transform transition-transform duration-300 hover:scale-110'><Link href="/">HOME</Link></p>
                <p className='transform transition-transform duration-300 hover:scale-110'><Link href="../ViewPage/">VIEW LOGS</Link></p>
                <p className='transform transition-transform duration-300 hover:scale-110'><Link href="/">ABOUT US</Link></p>
                <p className='transform transition-transform duration-300 hover:scale-110'><a href="https://github.com/SamarthBhatia77/Journallium" target="_blank">CONTRIBUTE✨</a></p>
            </div>
        </div>
    );
}