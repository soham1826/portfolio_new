"use client"
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import {useState} from "react"

const SocialNav = () => {
const [toggleDropdown ,setToggleDropdown] = useState(false)
    
  return (
    <div className="w-full md:p-5 flex flex-row items-center p-3 justify-between md:ml-10 sticky top-0 h-14">
        {/* Desktop Navigation */}
        <motion.div
        initial={{
                opacity:0,
                x :-300,
                scale:0.5
            }}
        animate={{
            x:0,
            scale:1,
            opacity:1
        }}
        transition={{
            duration:1.2
        }}

        className="md:flex md:flex-row items-center md:gap-4 gap-3 sm:gap-2 hidden ">
        <SocialIcon className="hover:scale-[1.2]" url="https://github.com/soham1826" fgColor="white" bgColor="transparent"/>

        <SocialIcon className="hover:scale-[1.2]" fgColor="white" url="https://www.linkedin.com/in/soham-ashok-kulkarni/" bgColor="transparent" />

        <SocialIcon className="hover:scale-[1.2]" fgColor="white" url="https://twitter.com/kulsoham18262" bgColor="transparent" />

        <SocialIcon className="hover:scale-[1.2]" fgColor="white" url="https://www.instagram.com/soham.jsx/" bgColor="transparent" />

        </motion.div>

        {/* mobile Navigation */}
        <motion.div
            initial={{
                opacity:0,
                x :-300,
                scale:0.5
            }}
            animate={{
            x:0,
            scale:1,
            opacity:1
            }}
            transition={{
            duration:1.2
            }}
        
        className="flex flex-row md:hidden items-center shadow-sm  cursor-pointer mt-2 ring ring-white rounded-xl justify-center" onClick={()=>setToggleDropdown((prev)=>(!prev))}>
            <SocialIcon bgColor="transparent"fgColor="white"/>
        </motion.div>
        {toggleDropdown &&(
  
            <motion.div 
            initial={{
                opacity:0,
                x:-300,
                scale:0.5
            }}
            animate={{
                x:0,
                scale:1,
                opacity:1
            }}
            transition={{
                duration:0.9
            }}
            
            className="sm:hidden absolute top-20 mt-[4.1rem] items-center flex flex-col w-15 bg-tranparent ring-1 ring-gray-300 p-2 rounded-lg  shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur">

                <SocialIcon className="hover:scale-[1.2]" url="https://github.com/soham1826" fgColor="white" bgColor="transparent"/>

                <SocialIcon className="hover:scale-[1.2]" fgColor="white" url="https://www.linkedin.com/in/soham-ashok-kulkarni/" bgColor="transparent" />

                <SocialIcon className="hover:scale-[1.2]" fgColor="white" url="https://twitter.com/kulsoham18262" bgColor="transparent" />

                <SocialIcon className="hover:scale-[1.2]" fgColor="white" url="https://www.instagram.com/soham.jsx/" bgColor="transparent" />
            </motion.div>
     
        )}


        <motion.div
        initial={{
            opacity:0,
            x :300,
            scale:0.5
        }}
        animate={{
            x:0,
            scale:1,
            opacity:1
        }}
        transition={{
            duration:1.2
        }}
        className="flex flex-row items-center justify-center p-3 md:mr-12">
        <SocialIcon className="hover:scale-[1.2]" fgColor="white" url="mailto:soham18262@gmail.com" bgColor="transparent" />
        <p className="font-poppins text-Swhite">Email</p>
        </motion.div>

            

     

    </div>
  )
}

export default SocialNav