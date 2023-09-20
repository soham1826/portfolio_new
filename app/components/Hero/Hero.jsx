"use client"
import React from 'react'
import Image from 'next/image'
import Typewriter from 'typewriter-effect'
import SocialNav from '../socialNav/SocialNav'
import { motion } from 'framer-motion'
const Hero = ({pageInfo,social}) => {
  return (
    <motion.div 
    initial={{
      opacity:0,
      y:200,
    }}
    whileInView={{
      y:0,
      opacity:1
    }}
    viewport={{once:true}}
    transition={{
      duration:1.25
    }}
    className="flex flex-col justify-center items-center mt-6 h-screen w-full p-2 text-center" >
      <Image className="rounded-full w-[200px] h-[200px] object-cover" alt ="My image" src={pageInfo[0].heroImage} width={200} height={200}/>
      <p className="uppercase opacity-2 tracking-[10px] md:text-[20px]
      xs:text-[10px] text-Swhite opacity-20 font-poppins mt-2">
        {pageInfo[0].role}
        </p>
      <h1 className="md:text-[2.5rem] text-[1.5rem] font-poppins text-Scream mt-2">
        <Typewriter options={{
          strings:[`I'm ${pageInfo[0].name}` ,'<% WEB-DEVELOPER %>','<% FRONT-END %>','<% BACK-END %>'],
          autoStart:true,
          loop:true,
          delay:50
        }}/>
      </h1>


     <SocialNav social={social}/>

  
    </motion.div>
    
  )
}

export default Hero