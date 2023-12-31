"use client"
import { motion } from "framer-motion"
import { useState } from 'react'
import { Line,Circle } from "rc-progress"
import ProgressBar from "@ramonak/react-progress-bar"
import { CircularProgress } from "@mui/material"
import Image from "next/image"


const Skill = ({imageSrc,completed,techName,imageUrl,bgcolor}) => {
  const [percent, setPercent] = useState(0);
  return (
    <div
    className=" group flex relative cursor-pointer">
      <Image 
      src={imageUrl} className={`rounded-md w-16 h-16 border-2 border-Scream object-contain xl:h-32 xl:w-32 md:h-24 md:w-24 filter group-hover:grayscale transition duration-300 ease-in-out bg-Snavy p-2`} width={300} height={300} alt="image"/>

      <div className="absolute opacity-0 group-hover:opacity-90 transition duration-100 ease-in-out group-hover:bg-Scream w-16 h-16 xl:h-32 xl:w-32 md:h-24 md:w-24 rounded-md " onMouseEnter={()=>{setTimeout(()=>{setPercent(completed)},500);}}
        onMouseLeave={()=>{setPercent(0)}}>
        <div className="flex items-center justify-center h-full xl:p-2  " 
        >
          <div className="absolute text-center text-Snavy">
          <p className="xl:text-xl text-xs font-poppins">{techName}</p>
          <p className=" xl:text-xl text-xs font-poppins">{completed}%</p>
          </div>
          <Circle percent={percent} strokeWidth={8} gapPosition="top" strokeColor="green"trailColor="gray" trailWidth={7}/>
        </div>
      </div>



    </div>
    
    
  )
}

export default Skill