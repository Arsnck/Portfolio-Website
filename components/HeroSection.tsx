"use client"
import { homedir } from 'os'
import React from 'react'
import Image from 'next/image'
import { Link, animateScroll as scroll } from 'react-scroll'
import { scroller } from 'react-scroll';
import {HiArrowDown} from "react-icons/hi"
import AboutSection from './AboutSection'

const HeroSection = () => {
  return (
    <section id="home" >
        <div className='flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-40 md:flex-row md:space-x-20 md:text-left'>
            <div className='md:w-1/3 md:mt-2'>
                <Image className='md:mx-5 rounded-full shadow-2xl'src="/fractaltree.png" alt="" width={250} height={250}/>
            </div>
            <div>
                <h1 className='font-bold text-2xl mt-6 text-white'>Hi, I&apos;m Nick </h1>
                <p className='text-white text-lg mt-4 mb-6'>
                    As a dedicated <span className='font-semibold text-teal-500'>Software Engineer</span>, my focus lies in creating innovative solutions
                     and crafting high-quality software applications.
                </p>
                <Link
                    to='projects'
                    className='text-white font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700 cursor-pointer hover:translate-y-1 transition-transform'
                    activeClass='active'
                    spy={true}
                    smooth = {true}
                    offset={-100}
                    duration={800}
                >
                    Projects
                </Link>
            </div>
        </div>
        <div className="flex flex-row justify-center">
          <div onClick={() => {
            scroller.scrollTo("about", {
              offset: -100,
              duration: 800,
              delay: 0,
              smooth: 'true'
            });
          }}>
            <HiArrowDown size={35} className="text-white animate-bounce" />
          </div>
        </div>
    </section>
  )
}

export default HeroSection