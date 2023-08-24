"use client"
import { motion } from "framer-motion"
const About = () => {
  return (
    <div className="h-screen w-full items-center text-center p-3 bg-Sblack rounded-lg">
        <div className="mt-14 ">
        <h1 className="h-12 font-poppins tracking-[4px]  md:text-[2.5rem] text-[1.5rem] uppercase text-Swhite">About</h1>
        </div>

        <div className="flex lg:flex-row lg:gap-2 flex-col  items-center">
          <motion.img 
           initial={{
            x:-200,
            opacity:0
          }}
          transition={{
            duration:1.2
          }}
          whileInView={{
           x:0,
           opacity:1
      
         }}
          
          src="/assets/about.jpg" className=" lg:w-1/4 lg:h-auto lg:rounded-xl rounded-md md:rounded-lg w-[200px] h-[200px] m-3 ring-1 ring-Scream"/>

          <motion.div
          initial={{
            x:200,
            opacity:0
          }}
          transition={{
           duration:1.2
          }}
          whileInView={{
            x:0,
            opacity:1
     
          }}
          
          
          className="text-Scream font-poppins text-xl space-y-1">
            <p className="text-Swhite">Lorem ipsum dolor sit amet,
            </p>
            <p className=" leading-8 font-medium lg:text-2xl lg:p-2 lg:m-2 text-xl ">
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum varius sit amet mattis vulputate enim nulla aliquet porttitor. Tortor aliquam nulla facilisi cras fermentum odio. Egestas maecenas pharetra convallis posuere morbi leo. Ut pharetra sit amet aliquam id diam maecenas ultricies. Pulvinar pellentesque habitant morbi tristique senectus. Tellus in hac habitasse platea. Ultrices neque ornare aenean euismod elementum. Tincidunt id aliquet risus feugiat in ante metus. Sit amet volutpat consequat mauris nunc congue nisi vitae suscipit. Viverra maecenas accumsan lacus vel facilisis volutpat est velit. Dis parturient montes nascetur ridiculus. Ultrices dui sapien eget mi proin.
          
            </p>
          </motion.div>

    

        </div>
        

    </div>
  )
}

export default About