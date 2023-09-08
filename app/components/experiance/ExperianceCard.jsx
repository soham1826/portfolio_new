"use client"
import { motion } from "framer-motion"

const ExperianceCard = () => {
  return <motion.article 
  initial={{
    opacity:0.5
  }}
  whileInView={{
    opacity:1
  }}

  transition={{
    duration:1.2
  }}
  className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[90vw] md:w-[600px] xl:w-[750px] snap-center p-10 bg-Swhite hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
    <motion.img
    initial={{
      y:-100,
      opacity:0,
    }}
    animate={{
      opacity:1,
      y:1
    }}
    transition={{
      duration:1
    }}
    viewport={{
      once:true
    }}
    

    className=" w-32 h-32 xl:w-[200px] xl:h-[200px] object-cover object-center rounded-full"  src="/assets/hero.jpg"/>

    <div className=" px-0 xl:px-10">
      <h4 className="text-4xl font-poppins">Software Developer Intern</h4>
      <p className="  text-Scream  font-bold text-2xl mt-1 font-roboto">MICROSOFT</p>
      <div className="flex space-x-2  my-0 pt-2">
        <img className="h-10 w-10 rounded-full"alt="" src="/assets/react.svg"/>
        <img className="h-10 w-10 rounded-full"alt="" src="/assets/react.svg"/>
        <img className="h-10 w-10 rounded-full"alt="" src="/assets/react.svg"/>
        <img className="h-10 w-10 rounded-full"alt="" src="/assets/react.svg"/>
        {/* tech Stack */}
        {/* tech Stack */}
        {/* tech Stack */}
        {/* tech Stack */}
      </div>
      <p className="uppercase py-5">Started work ... - Ended...</p>
      <ul className="list-disc space-y-4 ml-5 text-lg ">
        <li>Summary points</li>
        <li>Summary points</li>
        <li>Summary points</li>
        <li>Summary points</li>
        <li>Summary points</li>
        <li>Summary points</li>
      </ul>
    </div>

  </motion.article>
}

export default ExperianceCard