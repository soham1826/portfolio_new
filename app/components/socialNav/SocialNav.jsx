"use client"
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import {useState} from "react"

const SocialNav = ({social}) => {
// console.log(social)
const [toggleDropdown ,setToggleDropdown] = useState(false)
    
  return (
    <div className="w-full md:p-5 flex flex-row items-center p-3 justify-center h-14">
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

        
        className="flex flex-row items-center md:gap-4 gap-3 sm:gap-2  ">

        {social.map((social,index) => <SocialIcon key={index} className="hover:scale-[1.2]" url={social.url} fgColor="white" bgColor="transparent"/>
            )}
    
        <SocialIcon className="hover:scale-[1.2]" fgColor="white" url="mailto:soham18262@gmail.com" bgColor="transparent" />

        </motion.div>

        {/* mobile Navigation */}
        {/* <motion.div
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
        
        className="flex flex-row md:hidden items-center shadow-sm  cursor-pointer mt-2 ring-1 ring-white rounded-xl justify-center" onClick={()=>setToggleDropdown((prev)=>(!prev))}>
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
                duration:1,
            }}
            
            className="sm:hidden absolute top-20 mt-[4.1rem] items-center flex flex-col w-15 bg-tranparent ring-1 ring-gray-300 p-2 rounded-lg  shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur">
                
                <SocialIcon className="hover:scale-[1.2]" url="https://github.com/soham1826" fgColor="white" bgColor="transparent"/>

                <SocialIcon className="hover:scale-[1.2]" fgColor="white" url="https://www.linkedin.com/in/soham-ashok-kulkarni/" bgColor="transparent" />

                <SocialIcon className="hover:scale-[1.2]" fgColor="white" url="https://twitter.com/kulsoham18262" bgColor="transparent" />

                <SocialIcon className="hover:scale-[1.2]" fgColor="white" url="https://www.instagram.com/soham.jsx/" bgColor="transparent" />
            </motion.div>
     
        )} */}

     

    </div>
  )
}

export default SocialNav