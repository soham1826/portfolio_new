"use client"

import React from 'react'
import { motion } from 'framer-motion'
import ProjectElement from './ProjectElement'

const Projects = () => {
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    className="h-screen flex flex-col  items-center mt-20 overflow-x-auto  scrollbar-track-gray-400/20 scrollbar-thumb-Scream scrollbar-thin">
        <h3 className="text-2xl text-Scream tracking-[20px] font-poppins uppercase">MY PROJECTS</h3>
        <p className="uppercase font-poppins text-xl text-gray-300 opacity-20 tracking-wider mt-2"> Some of My Featured Work</p>
        <motion.div
        initial={{
          opacity:0,
          y:200
        }}
        viewport={{
          once:true
        }}
        whileInView={{
          opacity:1,
          y:0
        }}
        transition={{
          duration:1
        }}
        className='h-full flex-col px-3 '>
          <ProjectElement/>
          <ProjectElement/>
          <ProjectElement/>
          <ProjectElement/>
        </motion.div>
        
      

        

    </motion.div>
  )
}

export default Projects