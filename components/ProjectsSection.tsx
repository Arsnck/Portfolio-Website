import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {BsGithub, BsArrowUpRightSquare } from "react-icons/bs"
import SlideUp from './SlideUp'

const projects = [
    {
        name: "Globe Hunter",
        description: "An interactive game similar to GeoGuessr utilizing Google Maps Street View, Google Maps Geolocation API, and OpenWeatherMap API. Guess your location on the globe based on Google StreetView and an interavtive map of the world",
        image: "/globehunter.png",
        link: "https://arsnck.github.io/GlobeHunter/",
        github: "https://github.com/Arsnck/GlobeHunter"
    },
    {
        name: "Threaded File Processor",
        description: "A Multithreaded implementation of a a file processing algorithm to count phrases in large files written in C.",
        image: "/threads.png",
        link: "https://github.com/Arsnck/Threaded-search",
        github: "https://github.com/Arsnck/Threaded-search"
    },
    {
        name: "GeoPassword",
        description: "Work-in-progress project, which will generate passwords based on a location chosen on a map. Instead of memorizong a complicated password, simply generate it from a familiar location",
        image: "/img1.png",
        link: "https://github.com/Arsnck",
        github: "https://github.com/Arsnck"
    },
]

const ProjectsSection = () => {
  return (
    <section id="projects" className='text-white'>
        <h1 className='text-center font-bold text-2xl pb-10'>Projects
            <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded -mb-5"></hr>
        </h1>
        <div className='flex flex-col space-y-28'>
            {projects.map((project, idx) => {
                return <div key={idx}>
                    <SlideUp>
                        <div className='flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12'>
                            <div className='md:w-1/2 mt-8'>
                                <Link href={project.link} target='_blank'>
                                <Image
                                src = {project.image}
                                alt = ""
                                width={1000}
                                height={1000}                               
                                className='rounded-xl shadow-xl hover:opacity-70 '
                                />
                                </Link>
                            </div>
                            <div className='md:w-1/2 mt-12'>
                                <h1 className='text-2xl font-bold mb-3'>{project.name}</h1>
                                <p className='text-md leading-7 mb-4'>{project.description}</p>
                                <div className='flex flex-row align-bottom space-x-4'>
                                    <Link href={project.github} target='_blank'>
                                        <BsGithub size={30} className='hover:-translate-y-1 transition-transform cursor-pointer'></BsGithub>
                                    </Link>
                                    <Link href={project.link} target='_blank'>
                                        <BsArrowUpRightSquare size={30} className='hover:-translate-y-1 transition-transform cursor-pointer' ></BsArrowUpRightSquare>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        </SlideUp>
                       </div>
            })}
        </div>
    </section>
  )
}

export default ProjectsSection