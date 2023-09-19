"use client"
import Skill from "./Skill"
import { motion } from "framer-motion"


const Skills = ({skills}) => {
  // console.log(skills)
  return (
    <div className="h-screen w-screen flex flex-col gap-8 items-center justify-center">
      <div className="h-[80%] w-screen flex flex-col mt-10">
        <h3 className="uppercase tracking-[20px] text-Scream font-poppins md:text-4xl text-3xl  text-center">Skills</h3>
        <p className="uppercase font-poppins text-xl text-gray-300 opacity-20 tracking-wider text-center mt-2"> Hover/Click Over to see proficiancy</p>
      <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.2}}
    className="flex relative flex-col xl:flex-row max-w-[2000px] xl:px-10 min-h-[500px] justify-center xl:space-y-0 mx-0 items-center text-2xl mt-5">
    
      <div className="grid xl:grid-cols-6 lg:grid-cols-6 md:grid-cols-5 grid-cols-4 gap-5">
        {skills.map((skill,index)=><Skill key={index} completed={skill.progress} techName={skill.title} imageUrl={skill.image} bgcolor={skill.bgcolor}/>)}
        
        

      
        
        
        


     
      </div>
    </motion.div>
      </div>
      
    </div>
    



  )
}

export default Skills