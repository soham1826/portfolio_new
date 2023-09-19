"use client"
import { urlFor } from "@/sanity/ImageBuilder"
import { motion } from "framer-motion"
import Image from "next/image"

const ExperianceCard = ({jobTitle,compImage,company,dateStarted, dateEnded,workingStatus,techs,points}) => {
  
  return <motion.article 
  initial={{
    opacity:0.5
  }}
  whileInView={{
    opacity:1,

  }}

  transition={{
    duration:1
  }}
  className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[90vw] md:w-[600px] xl:w-[900px] snap-center p-10 bg-gray-400 bg-opacity-5   cursor-pointer transition-opacity duration-200 overflow-x-hidden h-auto shadow-md">
    <motion.img
    initial={{
      opacity:0,
      y:-50
    }}
    whileInView={{
      opacity:1,
      y:0
    }}
    transition={{
      duration:1
    }}
    viewport={{
      once:true
    }}
    className=" w-32 h-32 xl:w-[200px] xl:h-[200px] rounded-full object-cover" src={compImage}/>

    <div className=" px-0 xl:px-10">
      <h4 className="xl:text-4xl md:text-3xl text-2xl font-poppin text-Swhite">{jobTitle}</h4>
      <p className="  text-Scream  font-bold xl:text-2xl md:text-xl text-lg  mt-1 font-roboto">{company}</p>
      <div className="flex space-x-2  my-0 pt-2">
        {techs.map((tech,index)=><Image key={index} src={tech.image} alt="image" width={200} height={200} className="h-10 w-10"/>)}
      </div>
      <p className="uppercase py-5 font-poppins text-purple-400 ">{dateStarted} to {workingStatus? "Current": dateEnded}</p>
      <ul className="list-disc space-y-4 ml-5 text-xl font-roboto text-gray-600">
        {points.map((point,index)=><li key={index}>{point}</li>)}
      </ul>
    </div>

  </motion.article>
}

export default ExperianceCard