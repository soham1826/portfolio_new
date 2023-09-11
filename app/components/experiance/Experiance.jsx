"use client"
import ExperianceCard from "./ExperianceCard"
import { motion } from "framer-motion"
const Experiance = () => {
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    className="h-screen flex flex-col  items-center overflow-x-auto ">
        <h3 className="xl:text-4xl text-3xl text-Scream tracking-[20px] font-poppins uppercase mt-10">Experiance</h3>
        <p className="uppercase font-poppins text-xl text-gray-300 opacity-20 tracking-wider mt-2"> Scroll for more</p>

        <div 
        
        className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scroll-px-2 scrollbar-track-gray-400/20 scrollbar-thumb-Scream ">
            <ExperianceCard/>
            <ExperianceCard/>
            <ExperianceCard/>
            <ExperianceCard/>
        </div>
    </motion.div>

      

          
  )
}

export default Experiance