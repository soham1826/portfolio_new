"use client"
import { motion } from "framer-motion"

const ExperianceCard = () => {
  return (
    <motion.div 
    initial={{
        opacity:0.5
      }}
    whileInView={{
      opacity:1
    }}
    transition={{
      duration:3}}

    className="xl:w-[600px] xl:h-[500px] md:w-[400px] md:h-[600px] w-[350px] h-[600px]  bg-Scream text-center snap-center flex-shrink-0 rounded-md ">
        ExperianceCard
    </motion.div>
  )
}

export default ExperianceCard