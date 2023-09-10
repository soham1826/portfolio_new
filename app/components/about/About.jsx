/* eslint-disable react/no-unescaped-entities */
"use client"
import { motion } from "framer-motion"
const About = () => {
  return (
      <div className="h-screen py-5 my-5">


        <div className="text-center">
          <h3 className="text-4xl tracking-[20px] uppercase text-Scream font-poppins">About</h3>
        </div>

        <div className="flex flex-col xl:flex-row text-center xl:text-left mt-8 spacing-y-10 items-center gap-5 xl:px-[8rem] px-4 xl:justify-center h-full ">


          <motion.img 
          initial={{
            x:-200,
            opacity:0
          }}
          whileInView={{
            x:0,
            opacity:1
          }}
          transition={{
            duration:1.2
          }}
          viewport={{
            once:true
          }}
          
          src="/assets/about.jpg" className="flex-shrink-0 object-cover rounded-full w-56 h-56 md:w-[300px] md:h-[300px] md:rounded-lg xl:w-[500px] xl:h-[500px] xl:rounded-md"
          />

          <div className="flex flex-col md:px-2 h-56 md:h-[300px] xl:h-[500px]">

           <h4 className="font-poppins text-3xl text-Swhite mt-3">Some Info About me</h4>
            <p className="mt-3 font-roboto text-xl xl:text-2xl font-light text-Scream space-y-10">
           
            👋 Hey there, I'm Soham Kulkarni, an enthusiastic third-year Computer Engineering student hailing from the vibrant city of Nashik, Maharashtra, India. 🌆<br/>

            🌐 Embarking on an exhilarating journey into the world of web development two years ago, I've been on a relentless quest to blend creativity with code.<br/> 🚀 Through hands-on experiences and practical projects, I've refined my skills and unleashed innovative digital solutions.<br/>

            🎙️ Beyond the screen, I wield the power of words as a skilled speaker, captivating audiences with compelling narratives and dynamic presentations.<br/>

            🎓 As I continue my educational journey while navigating the ever-evolving tech landscape, I invite you to explore my portfolio—a fusion of creativity, innovation, and a touch of coding magic. 🖋️🌟 Join me in shaping the digital realm with pixels, prose, and passion!
            </p>
          </div>
          
         
          
        </div>
      </div>
)
        
}

export default About



