"use client"
import Skill from "./Skill"
import { motion } from "framer-motion"


const Skills = () => {
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.2}}
    className="h-screen flex relative flex-col xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-0 items-center text-2xl">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-Scream font-poppins">Skills</h3>
      <p className="absolute top-36 uppercase font-poppins text-lg text-gray-300 opacity-20 tracking-wider"> Hover/Click Over to see proficiancy</p>

      <div className="grid xl:grid-cols-6 grid-cols-4 gap-5">
        <Skill completed={80}/>
        <Skill completed={50}/>
        <Skill completed={80}/>
        <Skill completed={70}/>
        <Skill completed={60}/>
        <Skill completed={45}/>
        <Skill completed={30}/>
        <Skill completed={30}/>
        <Skill completed={30}/>
        <Skill completed={30}/>
        <Skill completed={30}/>
        <Skill completed={30}/>
        <Skill completed={30}/>
        <Skill completed={30}/>

     
      </div>
    </motion.div>



  )
}

export default Skills