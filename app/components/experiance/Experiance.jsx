"use client"
import ExperianceCard from "./ExperianceCard"
import { motion } from "framer-motion"
import { ArrowRightCircleIcon } from "@heroicons/react/24/solid"

const Experiance = ({experience}) => {
 
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1}}
    className="h-screen w-screen flex flex-col items-center justify-center">
      <div className="flex flex-col h-[80%] w-screen xl:px-10 px-5 ">
      <h3 className="xl:text-4xl text-2xl text-Scream tracking-[20px] font-poppins uppercase text-center">Experiance</h3>
        <p className="uppercase font-poppins text-xl text-gray-300 opacity-20 tracking-wider mt-2 flex flex-row items-center justify-center gap-2">Scroll for more <span><ArrowRightCircleIcon className="w-10"/></span> </p>

        <div 
        
        className="w-full flex space-x-5 overflow-x-scroll snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-Scream py-5 overflow-y-auto  ">
          {experience.map((exp,index)=><ExperianceCard key={index}
          jobTitle = {exp.jobTitle} compImage= {exp.compImage} company={exp.company} dateStarted = {exp.dateStarted} dateEnded={exp.dateEnded}  workingStatus={exp.isCurrentlyWorkingHere} techs={exp.technologies}
          points={exp.points}
          />)}
            
            
        </div>
      </div>
        
    </motion.div>

      

          
  )
}

export default Experiance