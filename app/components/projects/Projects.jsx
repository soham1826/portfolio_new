"use client"

import React from 'react'
import { motion } from 'framer-motion'
import ProjectElement from './ProjectElement'
import Project from './Project'
import { Carousel } from '@material-tailwind/react'
import Image from 'next/image'
import Link from 'next/link'
import { SiAirplayvideo, SiGithub } from 'react-icons/si'
import { ArrowRightCircleIcon } from "@heroicons/react/24/solid"


const Projects = () => {
  const projects = [1,2,3,4,5]
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    className="h-screen flex flex-col  items-center mt-20 overflow-x-auto overflow-y-hidden  scrollbar-track-gray-400/20 scrollbar-thumb-Scream scrollbar-none relative">
        <h3 className="text-2xl text-Scream tracking-[20px] font-poppins uppercase">MY PROJECTS</h3>
        <p className="uppercase font-poppins text-xl text-gray-300 opacity-20 tracking-wider mt-2 flex flex-row items-center gap-2">Some of my featured Work<span><ArrowRightCircleIcon className="w-10"/></span> </p>

        <div className='w-full flex overflow-x-scroll  overflow-y-hidden snap-x snap-mandatory'>
          {projects.map((project,i)=>(
            <div
            key={i} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-12 md:p-44  text-center mt-12'>
                <h3 className='text-Scream font-poppins xl:text-4xl md:text-3xl text-2xl '>Idlidu- Find Your Artist</h3>
                <motion.img 
                initial={{
                  opacity:0,
                  y :100
                }}
                whileInView={{
                  opacity:1,
                  y:0
                }}
                transition={{
                  duration:1.2
                }}
                src='/assets/idlidu.png' alt="none" className='w-[600px] h-auto rounded-lg'/>
                <p className='xl:text-2xl md:text-2xl text-xl text-Swhite xl:w-[60%] font-poppins '>A Fullstack web-app where you can list yourself as a artist in differnt arts and customers can get to know your details and hire you </p>

                <div className='flex flex-row gap-2'>
                  <Link href="https://www.github.com/soham1826" className='nav_link flex flex-row gap-2 font-poppins text-md items-center text-center justify-center w-[150px] h-auto'>
                    <SiGithub/>
                    <p>Souce Code</p>
                  </Link>
                  <Link href="https://www.github.com/soham1826" className='nav_link flex flex-row gap-2 font-poppins text-md items-center text-center justify-center w-[150px] h-auto'>
                    <SiAirplayvideo/>
                    <p>Demo</p>
                  </Link>
                </div>

                <div className='flex flex-row gap-4 items-center justify-evenly'>
                  <Image src="assets/nextdotjs.svg" alt="tech" width={100} height={100} className='xl:w-[50px] md:w-[50px] w-[40px] h-auto'/>
                  <Image src="assets/prisma-color.svg" alt="tech" width={100} height={100} className='xl:w-[50px] md:w-[50px] w-[40px] h-auto'/>
                  <Image src="assets/typescript.svg" alt="tech" width={100} height={100} className='xl:w-[50px] md:w-[50px] w-[40px] h-auto'/>
                  <Image src="assets/react.svg" alt="tech" width={100} height={100} className='xl:w-[50px] md:w-[50px] w-[40px] h-auto'/>
                  <Image src="assets/mongodb.svg" alt="tech" width={100} height={100} className='xl:w-[50px] md:w-[50px] w-[40px] h-auto'/>
                  <Image src="assets/nextdotjs.svg" alt="tech" width={100} height={100} className='xl:w-[50px] md:w-[50px] w-[40px] h-auto'/>
                </div>
            </div>
          ))}

        </div>
      

        {/* <div className='w-full h-[500px] bg-Scream/10 -skew-y-12 absolute top-[30%] '/> */}
        
    </motion.div>
  )
}

export default Projects