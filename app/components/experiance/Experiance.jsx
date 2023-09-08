"use client"
import ExperianceCard from "./ExperianceCard"
import { motion } from "framer-motion"
const Experiance = () => {
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    className="h-screen flex flex-col  items-center mt-20 overflow-x-auto">
        <h3 className="text-2xl text-Scream tracking-[20px] font-poppins uppercase">Experiance</h3>

        <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory ">
            <ExperianceCard/>
            <ExperianceCard/>
            <ExperianceCard/>
            <ExperianceCard/>
        </div>
    </motion.div>

      

          
  )
}

export default Experiance