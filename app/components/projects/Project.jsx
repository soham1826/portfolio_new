
"use client"
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import {SiGithub, SiAirplayvideo} from 'react-icons/si'
import Link from 'next/link'
import { Carousel } from '@material-tailwind/react'

const Project = () => {
  return (

      <div className="relative h-full w-full">
        <img
          src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
          alt="image 1"
          className="h-full w-full object-cover"
        />
      </div>  
    
  
  )
}

export default Project