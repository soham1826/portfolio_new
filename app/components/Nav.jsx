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
        <div className="flex space-x-2 items-center cursor-pointer">
          <CodeBracketSquareIcon className="w-10 h-10 text-Scream animate-pulse"/>
          <p className="text-Swhite">Soham.dev</p>
        </div>
        {/* navigation */}
        <div className=" flex-row items-center justify-center lg:flex hidden gap-2 mr-10">
          <a href="#Hero " className="nav-link2 flex flex-row gap-1 items-center group w-[100px]">
          <HomeIcon className="w-6 h-6 group-hover:animate-bounce text-Scream group-hover:text-black"/>
          <p>Home</p>
          </a>
          <a href="#About " className="nav-link2 flex flex-row gap-1 items-center group w-[100px]">
            <UserCircleIcon className="w-6 h-6 group-hover:animate-bounce text-Scream group-hover:text-black"/>
            About

            </a>
          <a href="#Skills " className="nav-link2 flex flex-row gap-1 items-center group w-[100px]">
            <TrophyIcon className="w-6 h-6 group-hover:animate-bounce text-Scream group-hover:text-black"/>
            Skills

            </a>
          <a href="#Experiance " className="nav-link2 flex flex-row gap-1 items-center group w-[150px]">
            <BriefcaseIcon className="w-6 h-6 group-hover:animate-bounce text-Scream group-hover:text-black"/>
            Experiance

            </a>
          <a href="#Projects " className="nav-link2 flex flex-row gap-1 items-center group w-[120px]">
            <PuzzlePieceIcon className="w-6 h-6 group-hover:animate-bounce text-Scream group-hover:text-black"/>
            Projects

            </a>
          <a href="#Contact " className="nav-link2 flex flex-row items-center group w-[120px] gap-1">
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
      {ToggleMobile && (
          <motion.div
          initial={{
            x:50,
            opacity:0
          }}
          whileInView={{
            x:0,
            opacity:1
          }}
          transition={{
            duration:1,
            type:easeInOut
          }}
          className=" flex-col items-center flex lg:hidden gap-1  w-[60%] bg-Sblack h-screen justify-evenly absolute right-0 top-0 rounded-l-lg z-20 transition-all duration-100">
           <div className="flex items-end">
            <button onClick={handleClose}><XCircleIcon className="w-8 h-8 text-Scream focus:animate-spin duration-75 "/></button>
           </div>
             <a href="#Hero " className="nav-link2 flex flex-row gap-1 items-center justify-center group w-full">
             <HomeIcon className="w-6 h-6 group-hover:animate-bounce text-Scream group-hover:text-black"/>
             <p>Home</p>
             </a>
             <a href="#About " className="nav-link2 flex flex-row gap-1 items-center group w-full justify-center">
               <UserCircleIcon className="w-6 h-6 group-hover:animate-bounce text-Scream group-hover:text-black"/>
               About
   
               </a>
             <a href="#Skills " className="nav-link2 flex flex-row gap-1 items-center group w-full justify-center">
               <TrophyIcon className="w-6 h-6 group-hover:animate-bounce text-Scream group-hover:text-black"/>
               Skills
   
               </a>
             <a href="#Experiance " className="nav-link2 flex flex-row gap-1 items-center group w-full justify-center">
               <BriefcaseIcon className="w-6 h-6 group-hover:animate-bounce text-Scream group-hover:text-black"/>
               Experiance
   
               </a>
             <a href="#Projects " className="nav-link2 flex flex-row gap-1 items-center group w-full justify-center">
               <PuzzlePieceIcon className="w-6 h-6 group-hover:animate-bounce text-Scream group-hover:text-black"/>
               Projects
   
               </a>
             <a href="#Contact " className="nav-link2 flex flex-row items-center group w-full justify-center gap-1">
               <EnvelopeIcon className="w-6 h-6 group-hover:animate-bounce text-Scream group-hover:text-black"/>
               Contact
             </a>
   
             <div className="resume-button">
               Resume
             </div>
           </motion.div>
         
      )}
     
      


    <div className={`absolute w-screen h-screen bg-transparent ${ToggleMobile ? "backdrop-blur-sm":""}`}>

    </div>
    </nav>

  )
}
    
          
  
  


export default Nav