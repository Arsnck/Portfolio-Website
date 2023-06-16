"use client"
import React, {useState} from 'react'
import {Link} from "react-scroll/modules"
import { useTheme} from "next-themes"
import {RiMoonFill, RiSunLine} from "react-icons/ri"
import {IoMdMenu, IoMdClose} from "react-icons/io"
import dynamic from 'next/dynamic'

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
const navbar = () => {
    // const {systemTheme, theme, setTheme} = useTheme()
    // const currentTheme = theme === "system" ? systemTheme : theme
    // const currentTheme = systemTheme
    const [navbar, setNavbar] = useState(false)
  return (
    <header className='w-full mx-auto px-4 bg-stone-900 shadow fixed top-0 z-50'>
        <div className='justify-between md:items-center md:flex' >

            <div>
                <div className='md:py-5 md:block'>
                    <h2 className='text-2xl font-bold text-white' >Nick Egorov</h2>
                </div>
            </div>
            <div className='md:flex md:space-x-6 text-white'>
                {NAV_ITEMS.map((item, idx) => {
                    return <a key = {idx}>{item.label}</a>
                })}
                
            </div>
        </div>
    </header>
  )
}

export default navbar