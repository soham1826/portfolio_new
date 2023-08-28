"use client"
import ExperianceCard from "./ExperianceCard"
import { motion } from "framer-motion"
const Experiance = () => {
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    className="h-screen flex flex-col  items-center text-center mt-24 overflow-x-auto">
        <h3 className="text-2xl text-Scream tracking-[20px] font-poppins uppercase">Experiance</h3>

        <div className="flex flex-row snap-x snap-mandatory gap-5 overflow-x-scroll px-10 xl:w-[1200px] md:w-full w-[400px]  mt-12">
            <ExperianceCard/>
            <ExperianceCard/>
            <ExperianceCard/>
            <ExperianceCard/>
            <ExperianceCard/>
            <ExperianceCard/>
        </div>
    </motion.div>

      

          
  )
}

export default Experiance