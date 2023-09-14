"use client"
import Link from "next/link"
import { easeIn, easeInOut, motion } from "framer-motion"
import { SocialIcon } from "react-social-icons"
import { useState, useCallback, useEffect } from "react"
import { CodeBracketSquareIcon} from "@heroicons/react/24/solid"
import { UserCircleIcon ,HomeIcon, TrophyIcon, BriefcaseIcon, PuzzlePieceIcon , EnvelopeIcon, Bars3BottomRightIcon, XCircleIcon} from "@heroicons/react/24/outline"
const Nav = () => {
  const[ToggleMobile,SetToggleMobile] = useState(false)
  const handleOpen =()=>{
    SetToggleMobile(true)
  }
  const handleClose = ()=>{
    SetToggleMobile(false)
  }
  
  return (
    <nav className="sticky top-0 font-poppins text-xl p-4 z-20 ">
      <div className="w-full justify-between items-center flex flex-row h-auto bg-transparent backdrop-blur-sm">
        {/* logo */}
        <a href="#Hero" className="flex space-x-2 items-center cursor-pointer">
          <CodeBracketSquareIcon className="w-10 h-10 text-Scream animate-pulse"/>
          <p className="text-Swhite">Soham.dev</p>
        </a>
        {/* navigation */}
        <div className=" flex-row items-center justify-center lg:flex hidden gap-2 mr-10">
          <a href="#Hero " className="nav-link2 flex flex-row gap-1 items-center justify-center group w-[100px]">
          <HomeIcon className="w-6 h-6 group-hover:animate-bounce text-Scream group-hover:text-black"/>
          <p>Home</p>
          </a>
          <a href="#About " className="nav-link2 flex flex-row gap-1 items-center group w-[100px] justify-center">
            <UserCircleIcon className="w-6 h-6 group-hover:animate-bounce text-Scream group-hover:text-black"/>
            About

            </a>
          <a href="#Skills " className="nav-link2 flex flex-row gap-1 items-center group w-[100px] justify-center">
            <TrophyIcon className="w-6 h-6 group-hover:animate-bounce text-Scream group-hover:text-black"/>
            Skills

            </a>
          <a href="#Experiance " className="nav-link2 flex flex-row gap-1 items-center group w-[150px] justify-center">
            <BriefcaseIcon className="w-6 h-6 group-hover:animate-bounce text-Scream group-hover:text-black"/>
            Experiance

            </a>
          <a href="#Projects " className="nav-link2 flex flex-row gap-1 items-center group w-[120px] justify-center">
            <PuzzlePieceIcon className="w-6 h-6 group-hover:animate-bounce text-Scream group-hover:text-black"/>
            Projects

            </a>
          <a href="#Contact " className="nav-link2 flex flex-row items-center group w-[120px] gap-1 justify-center">
            <EnvelopeIcon className="w-6 h-6 group-hover:animate-bounce text-Scream group-hover:text-black"/>
            Contact

            </a>
          
        </div>
        <div className="resume-button lg:flex hidden">
            Resume
        </div>

        <button className="w-10 h-10 text-Scream flex lg:hidden" onClick={handleOpen}>
          <Bars3BottomRightIcon/>
        </button>



      </div>
      {/* Mobile Navigation */}

      {ToggleMobile && (
          <motion.div
          initial={{
            x:100,
            z:20,
            opacity:0
          }}
          animate={{
            x:0,
            z:20,
            opacity:1
          }}
          transition={{
            
          }}
          
          className=" flex-col items-center flex lg:hidden w-[60%] bg-Sblack h-screen justify-evenly absolute right-0 top-0 rounded-l-lg z-20 transition-all duration-100 border-l border-gray-400">
           <div className="flex justify-end w-full pr-2 mt-1">
            <motion.button
            initial={{
              opacity:0,
              scale:0
            }}
            whileInView={{
              opacity:1,
              scale:1
            }}
            transition={{
              duration:0.5
            }}
             onClick={handleClose}><XCircleIcon className="w-10 h-10 text-Scream focus:animate-spin duration-75  "/></motion.button>
           </div>
           <div className="flex flex-col gap-4 items-center justify-center py-10 h-full">
           <a href="#Hero " className="nav-link2 p-7 flex flex-row gap-1 items-center justify-center group w-full" onClick={handleClose}>
             <HomeIcon className="w-6 h-6 group-hover:animate-bounce text-Scream group-hover:text-black"/>
             <p>Home</p>
             </a>
             <a href="#About " className="nav-link2 p-7 flex flex-row gap-1 items-center group w-full justify-center" onClick={handleClose}>
               <UserCircleIcon className="w-6 h-6 group-hover:animate-bounce text-Scream group-hover:text-black"/>
               About
   
               </a>
             <a href="#Skills " className="nav-link2 p-7 flex flex-row gap-1 items-center group w-full justify-center" onClick={handleClose}>
               <TrophyIcon className="w-6 h-6 group-hover:animate-bounce text-Scream group-hover:text-black"/>
               Skills
   
               </a>
             <a href="#Experiance " className="nav-link2 p-7 flex flex-row gap-1 items-center group w-full justify-center" onClick={handleClose}>
               <BriefcaseIcon className="w-6 h-6 group-hover:animate-bounce text-Scream group-hover:text-black"/>
               Experiance
   
               </a>
             <a href="#Projects " className="nav-link2 p-7 flex flex-row gap-1 items-center group w-full justify-center" onClick={handleClose}>
               <PuzzlePieceIcon className="w-6 h-6 group-hover:animate-bounce text-Scream group-hover:text-black"/>
               Projects
   
               </a>
             <a href="#Contact " className="nav-link2 p-7 flex flex-row items-center group w-full justify-center gap-1" onClick={handleClose}>
               <EnvelopeIcon className="w-6 h-6 group-hover:animate-bounce text-Scream group-hover:text-black"/>
               Contact
             </a>
   
             <div className="resume-button">
               Resume
             </div>
           </div>
            
           </motion.div>
         
      )}
     
      


    <div className={`absolute w-screen h-screen bg-transparent lg:hidden  ${ToggleMobile ? "backdrop-blur-sm":""} ${ToggleMobile?"flex":"hidden"} `}>

    </div>
    </nav>

  )
}
    
          
  
  


export default Nav