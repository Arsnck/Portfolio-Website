import React from 'react'

const skills = [
    {skill:"Java"},
    {skill:"C"},
    {skill:"Python"},
    {skill:"HTLM"},
    {skill:"CSS"},
    {skill:"Git"},
    {skill:"GitHub"},
    {skill:"React"},
    {skill:"JavaScript"},
]

const AboutSection = () => {
  return (
    <section id="about">
            <div className='text-white my-12 mb-12 md:pt-16 md:mb-48 mx-5'>
                <h1 className='text-center font-bold text-2xl pb-10'>About Me
                  <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded -mb-5"></hr>
                </h1>
                <div className='flex flex-col md:flex-row space-y-10 items-stretch justify-center allign-top md-text-left md-p-4 md:space-y-0 md:space-x-10'>
                    <div className='md:w-1/2'>
                        <h1 className='text-center text-lg font-bold mb-6 md:text-left'>Get to know me</h1>
                        <p>I am currently a <span className='font-semibold text-teal-500'>third-year</span> student at Indiana University Bloomington persuing
                            a degree in Computer Science. My specialization is Software Engineering.
                        </p>
                        <br/>
                        <p>Some of my hobbies include: building computers, overclocking hardware, working on my car, playing video games, and working out. </p>
                    </div>

                    <div className='md:w-1/2 text-center md:text-left'>
                        <h1 className='text-center text-lg font-bold mb-6 md:text-left'>Skills</h1>
                        <div className='flex flex-wrap flex-row justify-center md:justify-start'>
                            {skills.map((item, idx) => {
                                return <p key={idx} className='bg-stone-700 px-4 py-2 mr-2 mt-2 text-white rounded font-semibold'>{item.skill}</p>
                            })}
                        </div>
                    </div>


                </div>
            </div>
    </section>
  )
}

export default AboutSection