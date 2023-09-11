"use client"
import React from 'react'
import { motion } from 'framer-motion'
import {FaGithub, FaReact} from 'react-icons/fa6'
import {RiComputerFill} from 'react-icons/ri'
import {SiGithub, SiLeaflet, SiMongodb, SiNextdotjs, SiPrisma, SiTailwindcss, SiTypescript, SiAirplayvideo} from 'react-icons/si'
import Link from 'next/link'
import { SocialIcon } from 'react-social-icons'
import Image from 'next/image'

const ProjectElement = () => {
  return (
    <div
    className='h-[600px] xl:h-[40%] md:h-[40%] lg-h-[40%] max-w-7xl flex xl:flex-row lg:flex-row md:flex-row flex-col   justify-evenly mt-8 p-3 border-Sblack border rounded-lg items-center  bg-gray-400 bg-opacity-5 shadow-md'>
      <motion.img 
      initial={{
        opacity:0
      }}
      whileInView={{
        opacity:1,
      }}
      viewport={{
        once:true
      }}
      transition={{
        duration:1.2
      }}
      src="/assets/idlidu.png" className="w-[350px] h-[180px] xl:w-[400px] xl:h-[300px] md:h-[250px] md:w-[350px]  rounded-lg flex-shrink-0 object-cover "/>
      <motion.div 
      initial={{
        opacity:0
      }}
      whileInView={{
        opacity:1,
      }}
      viewport={{
        once:true
      }}
      transition={{
        duration:1.2
      }}
      className='text-center flex-col'>
        <h3 className='xl:text-4xl md:text-3xl sm:text-2xl text-2xl font-poppins text-Scream'>Idlidu - MarketPlace For Artists</h3>
        <p className='xl:text-2xl text-xl text-Swhite'>It it a wonderfull webapp where you can have your artist profile and get invited by various customers for performnaces and get paid</p>

        <div className='flex flex-row gap-5 items-center justify-center p-3'>
          <div className="nav_link w-[150px] h-12 items-center flex flex-row justify-center gap-2">
          <SiGithub/> 
          <h4 className='text-sm'>Source Code</h4>
          </div>
          
          <div className="nav_link w-[150px] h-12 items-center flex flex-row justify-center gap-2">
          <SiAirplayvideo/> 
          <h4 className='text-sm'>Demo</h4>
          </div>
          
          
        </div>
          

        <div className= "p-2 flex flex-row gap-2 items-center justify-evenly mt-2">
         <Image src="/assets/react.svg" width={30} height={30} alt='none' className='w-14 h-14 grayscale'/>
         <Image width={30} height={30} src="/assets/nextdotjs.svg" className='w-14 h-14' alt="nextjs"/>
         <Image src="/assets/prisma-color.svg" width={30} height={30} alt='none' className='w-14 h-14 '/>
         <Image src="/assets/mongodb.svg" width={30} height={30} alt='none' className='w-14 h-14'/>
         <Image src="/assets/typescript.svg" width={30} height={30} alt='none' className='w-14 h-14'/>
        </div>
    
      </motion.div>


    </div>
  )
}

export default ProjectElement