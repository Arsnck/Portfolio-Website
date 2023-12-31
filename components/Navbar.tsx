"use client"
import React, {useState} from 'react'
import {Link} from "react-scroll/modules"
import { useTheme} from "next-themes"
import {IoMdMenu, IoMdClose} from "react-icons/io"
import dynamic from 'next/dynamic'
import { scroller } from 'react-scroll';

interface NavItem{
    label: string
    page: string
}

const NAV_ITEMS: Array<NavItem> = [
    {
        label: "Home",  
        page: "home",
    },  
    {
        label: "About",  
        page: "about",
    }, 
    {
        label: "Projects",  
        page: "projects",
    }, 
]
const Navbar = () => {
    // const {systemTheme, theme, setTheme} = useTheme()
    // const currentTheme = theme === "system" ? systemTheme : theme
    // const currentTheme = systemTheme
    const [Navbar, setNavbar] = useState(false)
  return (
    <header className='w-full mx-auto px-4 bg-stone-900 shadow fixed top-0 z-50 sm:px-10'>
        <div className='justify-between md:items-center md:flex' >
            <div>
                <div className='flex items-center justify-between py-3'>
                <div className='cursor-pointer md:py-5 md:block' onClick={() => scroller.scrollTo('home', {
                    duration: 100,
                    delay: 0,
                    smooth: 'true'
                    })}>
                        <h2 className='text-2xl font-bold text-white'>Nick Egorov</h2>
                </div>
                    <div className='md:hidden'>   
                        <button onClick={()=>setNavbar(!Navbar)}>
                            {Navbar ? <IoMdClose size={30} color='white'/> : <IoMdMenu size={30} color='white'/>}
                        </button>
                    </div>
                </div>
            </div>
            <div>
                <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                Navbar ? "block" : "hidden"
                }`}>
                    <div className='items-center justify-center md:flex md:space-x-6 text-white space-y-8 md:space-y-0'>
                        {NAV_ITEMS.map((item, idx) => {
                            return(
                                <Link 
                                key={idx}
                                to={item.page}
                                className={
                                  "block lg:inline-block text-neutral-100  hover:text-teal-300 text-neutral-100 cursor-pointer " 
                                }
                                activeClass="active"
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={500}
                                onClick={() => setNavbar(!Navbar)}
                              >
                                {item.label}
                              </Link>
                            )
                        })}               
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Navbar