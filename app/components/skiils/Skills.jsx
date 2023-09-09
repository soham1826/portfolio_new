"use client"
import Skill from "./Skill"
import { motion } from "framer-motion"


const Skills = () => {
  return (
    <div className="h-screen">
      <div className="text-center m-4" >
        <h3 className="uppercase tracking-[20px] text-Scream font-poppins mt-16 text-4xl">Skills</h3>
        <p className="uppercase font-poppins text-xl text-gray-300 opacity-20 tracking-wider mb-12 mt-2"> Hover/Click Over to see proficiancy</p>
      </div>
      
      <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.2}}
    className="flex relative flex-col xl:flex-row max-w-[2000px] xl:px-10 min-h-[500px] justify-center xl:space-y-0 mx-0 items-center text-2xl">
    
      <div className="grid xl:grid-cols-6 grid-cols-4 gap-5">
        <Skill completed={80} techName="React"/>
        <Skill completed={80} techName="React"/>
        <Skill completed={80} techName="React"/>
        <Skill completed={80} techName="React"/>
        <Skill completed={80} techName="React"/>
        <Skill completed={80} techName="React"/>
        <Skill completed={80} techName="React"/>
        <Skill completed={80} techName="React"/>
        <Skill completed={80} techName="React"/>
        <Skill completed={80} techName="React"/>
        <Skill completed={80} techName="React"/>
        <Skill completed={80} techName="React"/>
        <Skill completed={80} techName="React"/>
        <Skill completed={80} techName="React"/>
        <Skill completed={80} techName="React"/>
        <Skill completed={80} techName="React"/>
        <Skill completed={80} techName="React"/>
        <Skill completed={80} techName="React"/>

      
        
        
        


     
      </div>
    </motion.div>
    </div>
    



  )
}

export default Skills