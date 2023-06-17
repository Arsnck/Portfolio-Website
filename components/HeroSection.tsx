"use client"
import { homedir } from 'os'
import React from 'react'
import Image from 'next/image'
import { Link } from 'react-scroll'
import {HiArrowDown} from "react-icons/hi"

const HeroSection = () => {
  return (
    <section id="home" >
        <div className='flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-20 md:text-left'>
            <div className='md:w-1/3 md:mt-2'>
                <Image className='md:mx-5 rounded-full shadow-2xl'src="/fractaltree.png" alt="" width={250} height={250}/>
            </div>
            <div>
                <h1 className='font-bold text-2xl mt-6 text-white'>Hi, I'm Nick </h1>
                <p className='text-white text-lg mt-4 mb-6'>
                    Blah blah blah here is some <span className='font-semibold text-teal-600'>super</span> interesting information about 
                    me that will totally convince you to hire me
                </p>
                <Link
                    to='projects'
                    className='text-white font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700'
                    activeClass='active'
                    spy={true}
                    smooth = {true}
                    offset={-100}
                    duration={500}
                >
                    Projects
                </Link>
            </div>
        </div>
        <div className="flex flex-row justify-center">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="text-white animate-bounce" />
        </Link>
        </div>
    </section>
  )
}

export default HeroSection