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
    className="h-screen flex flex-col  items-center mt-20 overflow-x-auto">
        <h3 className="text-2xl text-Scream tracking-[20px] font-poppins uppercase">MY PROJECTS</h3>
        <div className='h-full flex-col px-3 '>
          <ProjectElement/>
          <ProjectElement/>
          <ProjectElement/>
          <ProjectElement/>
        </div>
        
      

        

    </motion.div>
  )
}

export default Projects