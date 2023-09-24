"use client"

import { motion } from "framer-motion"
import { CodeBracketSquareIcon } from "@heroicons/react/24/solid"
export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
    <div 
    
    className="flex flex-col items-center justify-center w-screen h-screen bg-Sblack"
    >
      <motion.div
      initial={{
        scale:0
      }}
      animate={{
        scale:1
      }}
      transition={{
        duration:1.2
      }}
      >
      <CodeBracketSquareIcon className="text-Scream h-[300px] w-[300px]"/>
      </motion.div>
      <motion.p 
      initial={{
        opacity:0,
      }}
      animate={{
        opacity:1,
      }}
      transition={{
        duration:1.5
      }}
      className=" font-poppins text-4xl text-Swhite">Soham.dev</motion.p>

    </div>)
  }