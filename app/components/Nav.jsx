"use client";
import Link from "next/link";
import { easeIn, easeInOut, motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";
import { useState, useCallback, useEffect } from "react";
import { CodeBracketSquareIcon } from "@heroicons/react/24/solid";
import {
  UserCircleIcon,
  HomeIcon,
  TrophyIcon,
  BriefcaseIcon,
  PuzzlePieceIcon,
  EnvelopeIcon,
  Bars3BottomRightIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";
const Nav = () => {
  const [ToggleMobile, SetToggleMobile] = useState(false);
  const handleOpen = () => {
    SetToggleMobile(true)
    ;
  };
  const handleClose = () => {
    setTimeout(()=>{
      SetToggleMobile(false)
    },500)
  };

  {
    /* <a href="#Hero " className="nav-link2 p-4 flex flex-row gap-1 items-center justify-start ml-12 group w-full" onClick={handleClose}>
             <HomeIcon className="mobile-nav-icon"/>
             <p>Home</p>
             </a>
             <a href="#About " className="nav-link2 p-4 flex flex-row gap-1 items-center group w-full justify-start ml-12" onClick={handleClose}>
               <UserCircleIcon className="mobile-nav-icon"/>
               About
   
               </a>
             <a href="#Skills " className="nav-link2 p-4 flex flex-row gap-1 items-center group w-full justify-start ml-12" onClick={handleClose}>
               <TrophyIcon className="mobile-nav-icon"/>
               Skills
   
               </a>
             <a href="#Experiance " className="nav-link2 p-4 flex flex-row gap-1 items-center group w-full justify-start ml-12" onClick={handleClose}>
               <BriefcaseIcon className="mobile-nav-icon"/>
               Experiance
   
               </a>
             <a href="#Projects " className="nav-link2 p-4 flex flex-row gap-1 items-center group w-full justify-start ml-12" onClick={handleClose}>
               <PuzzlePieceIcon className="mobile-nav-icon"/>
               Projects
   
               </a>
             <a href="#Contact " className="nav-link2 p-4 flex flex-row items-center group w-full justify-start ml-12 gap-1" onClick={handleClose}>
               <EnvelopeIcon className="mobile-nav-icon"/>
               Contact
             </a>
   
             <div className="resume-button">
               Resume
             </div> */
  }

  return (
    <nav className="sticky top-0 font-poppins text-xl p-4 z-20 bg-Sblack border-b border-Sblack ">
      <div className="w-full justify-between items-center flex flex-row h-auto">
        {/* logo */}
        <a href="#Hero" className="flex space-x-2 items-center cursor-pointer">
          <CodeBracketSquareIcon className="w-10 h-10 text-Scream animate-pulse" />
          <p className="text-Swhite">Soham.dev</p>
        </a>
        {/* navigation */}
        <div className=" flex-row items-center justify-start ml-8 lg:flex hidden gap-2 mr-14">
          <a
            href="#Hero "
            className="nav-link2 flex flex-row gap-1 items-center justify-start  group w-[100px] mx-3"
          >
            <HomeIcon className="mobile-nav-icon group-hover:animate-bounce" />
            <p>Home</p>
          </a>
          <a
            href="#About "
            className="nav-link2 flex flex-row gap-1 items-center group w-[100px] justify-start mx-3 "
          >
            <UserCircleIcon className="mobile-nav-icon group-hover:animate-bounce" />
            About
          </a>
          <a
            href="#Skills "
            className="nav-link2 flex flex-row gap-1 items-center group w-[100px] justify-start mx-3 "
          >
            <TrophyIcon className="mobile-nav-icon group-hover:animate-bounce" />
            Skills 
          </a>
          <a
            href="#Experiance "
            className="nav-link2 flex flex-row gap-1 items-center group w-[150px] justify-start mx-3"
          >
            <BriefcaseIcon className="mobile-nav-icon group-hover:animate-bounce" />
            Experiance
          </a>
          <a
            href="#Projects "
            className="nav-link2 flex flex-row gap-1 items-center group w-[120px] justify-start mx-3"
          >
            <PuzzlePieceIcon className="mobile-nav-icon group-hover:animate-bounce" />
            Projects
          </a>
          <a
            href="#Contact "
            className="nav-link2 flex flex-row items-center group w-[120px] gap-1 justify-start mx-3"
          >
            <EnvelopeIcon className="mobile-nav-icon group-hover:animate-bounce" />
            Contact
          </a>
        </div>
        <div className="resume-button lg:flex hidden">Resume</div>

        <button
          className="w-10 h-10 text-Scream flex lg:hidden"
          onClick={handleOpen}
        >
          <Bars3BottomRightIcon />
        </button>
      </div>
      {/* Mobile Navigation */}

      {ToggleMobile && (
        <motion.div
          initial={{
            x: 100,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{}}
          className=" flex-col items-center flex lg:hidden w-[60%] bg-zinc-900 h-screen justify-evenly absolute right-0 top-0 rounded-l-lg z-20 transition-all duration-10 "
        >
          <div className="flex justify-end w-full pr-2">
            <motion.button
              initial={{
                opacity: 0,
                scale: 0,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.5,
              }}
              onClick={handleClose}
            >
              <XCircleIcon className="w-10 h-10 text-Scream hover:animate-spin " />
            </motion.button>
          </div>
          <motion.div
            initial={{
              y: 100,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.7,
              delay: 0.5,
            }}
            className="flex flex-col justify-start items-start h-[50%]  w-full mb-32"
          >
            <a
              href="#Hero "
              className="nav-link2 flex flex-row gap-1 items-center justify-start group w-full p-4 ml-12"
              onClick={handleClose}
            >
              <HomeIcon className="mobile-nav-icon" />
              <p>Home</p>
            </a>

            <a href="#About " className="nav-link2 flex flex-row gap-1 items-center group w-full p-4 justify-start ml-12" onClick={handleClose}>
               <UserCircleIcon className="mobile-nav-icon"/>
               About
               </a>

               <a href="#Skills " className="nav-link2 p-4 flex flex-row gap-1 items-center group w-full justify-start ml-12" onClick={handleClose}>
               <TrophyIcon className="mobile-nav-icon"/>
               Skills
   
               </a>
             <a href="#Experiance " className="nav-link2 p-4 flex flex-row gap-1 items-center group w-full justify-start ml-12" onClick={handleClose}>
               <BriefcaseIcon className="mobile-nav-icon"/>
               Experiance
   
               </a>
             <a href="#Projects " className="nav-link2 p-4 flex flex-row gap-1 items-center group w-full justify-start ml-12" onClick={handleClose}>
               <PuzzlePieceIcon className="mobile-nav-icon"/>
               Projects
   
               </a>
             <a href="#Contact " className="nav-link2 p-4 flex flex-row items-center group w-full justify-start ml-12 gap-1" onClick={handleClose}>
               <EnvelopeIcon className="mobile-nav-icon"/>
               Contact
             </a>
             <button className="p-4 text-Sblack bg-Scream rounded-md w-auto h-auto items-center justify-center ml-14  mt-2">
              Resume
             </button>
   
             

          </motion.div>
        </motion.div>
      )}

      <div
        className={`absolute w-screen h-screen bg-transparent lg:hidden  ${
          ToggleMobile ? "backdrop-blur-sm" : ""
        } ${ToggleMobile ? "flex" : "hidden"} `}
      ></div>
    </nav>
  );
};

export default Nav;
