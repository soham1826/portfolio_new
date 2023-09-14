"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Project from './Project'
import Image from 'next/image'
import Link from 'next/link'
import { SiAirplayvideo, SiGithub } from 'react-icons/si'
import { ArrowRightCircleIcon } from "@heroicons/react/24/solid"
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css";


const Projects = () => {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  const projects = [1,2,3,4,5]
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    className="h-screen flex flex-col  items-center  overflow-x-auto overflow-y-hidden  scrollbar-track-gray-400/20 scrollbar-thumb-Scream scrollbar-none relative text-center mt-40 ">
        <h3 className="xl:text-4xl text-2xl text-Scream tracking-[20px] font-poppins uppercase mt-16">My Projects</h3>
        <p className="uppercase font-poppins text-xl text-gray-300 opacity-20 tracking-wider mt-2 flex flex-row items-center gap-2">Some of my featured Work<span><ArrowRightCircleIcon className="w-10"/></span> </p>
        
        <div className='w-full h-auto'>
            <Carousel  renderButtonGroupOutside={true}  responsive={responsive} className='w-screen h-auto'>
              <Project/>
              <Project/>
              <Project/>
              <Project/>
            </Carousel>
        </div>
       
        
      

        {/* <div className='w-full h-[500px] bg-Scream/10 -skew-y-12 absolute top-[30%] '/> */}
  </motion.div>
  )
}

export default Projects