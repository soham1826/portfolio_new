"use client"
import React from 'react'
import Heading from '../Heading'
import Image from 'next/image'
import Typewriter from 'typewriter-effect'
import Nav from '../Nav'

const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-6 h-screen w-full p-2 text-center" >
      <Image className="rounded-full w-[200px] h-[200px] object-cover" alt ="My image" src="/assets/hero2.png" width={200} height={200}/>
      <p className="uppercase opacity-2 tracking-[10px] md:text-[20px]
      xs:text-[10px] text-Swhite opacity-20 font-poppins mt-2">software Developer</p>
      <h1 className="md:text-[2.5rem] text-[1.5rem] font-poppins text-Scream mt-2">
        <Typewriter options={{
          strings:["I'm Soham Kulkarni",'</DEVELOPER>','</COFFE-LOVER>'],
          autoStart:true,
          loop:true,
          delay:50
        }}/>
      </h1>

      <Nav/>

  
    </div>
    
  )
}

export default Hero