"use client"
import '../styles/globals.css'
import Navbar from '@/components/Navbar'
import { ThemeProvider } from "next-themes"
//import {Providers} from "./providers"
import Footer from '@/components/Footer'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className='bg-stone-800'>
      <head />
      <body>
          <Navbar />
          {children}
      </body>
    </html>
  )
}
