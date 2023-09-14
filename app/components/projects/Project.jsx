"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { SiGithub, SiAirplayvideo } from "react-icons/si";
import Link from "next/link";
import { Carousel } from "@material-tailwind/react";

const Project = () => {
  return (
    <div className="w-screen h-auto flex-shrink-0  flex flex-col space-y-5 items-center justify-center p-12 md:p-22  text-center overflow-y-auto ">
      <motion.div
      initial={{
        opacity: 0,
        y: -100,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once:true
      }}
      className="flex flex-col items-center justify-center text-center gap-2">
        <h3 className="text-Scream font-poppins xl:text-4xl md:text-3xl text-2xl ">
          Idlidu- Find Your Artist
        </h3>
        <Image
          src="/assets/idlidu.png"
          alt="none"
          className="xl:w-[600px] lg:w-[500px] md:w-[400px] w-[300px]  h-auto rounded-lg"
          width={1000}
          height={1000}
        />
        <p className="xl:text-2xl md:text-2xl text-xl text-Swhite xl:w-[60%] font-poppins ">
          A Fullstack web-app where you can list yourself as a artist in
          differnt arts and customers can get to know your details and hire you
        </p>

        <div className="flex flex-row gap-2">
        <Link
          href="https://www.github.com/soham1826"
          className="nav_link flex flex-row gap-2 font-poppins text-md items-center text-center justify-center w-[150px] h-auto"
        >
          <SiGithub />
          <p>Souce Code</p>
        </Link>
        <Link
          href="https://www.github.com/soham1826"
          className="nav_link flex flex-row gap-2 font-poppins text-md items-center text-center justify-center w-[150px] h-auto"
        >
          <SiAirplayvideo />
          <p>Demo</p>
        </Link>
      </div>

      <div className="flex flex-row gap-4 items-center justify-evenly">
        <ul  className=" list-inside flex flex-row items-center justify-evenly">
          <li className="tech-names">Next.js</li>
          <li className="tech-names">Prisma</li>
          <li className="tech-names">React.js</li>
          <li className="tech-names">MongoDB</li>
        
    
        </ul>
        
        {/* <Image
          src="assets/prisma-color.svg"
          alt="tech"
          width={100}
          height={100}
          className="xl:w-[50px] md:w-[50px] w-[40px] h-auto"
        />
        <Image
          src="assets/typescript.svg"
          alt="tech"
          width={100}
          height={100}
          className="xl:w-[50px] md:w-[50px] w-[40px] h-auto"
        />
        <Image
          src="assets/react.svg"
          alt="tech"
          width={100}
          height={100}
          className="xl:w-[50px] md:w-[50px] w-[40px] h-auto"
        />
        <Image
          src="assets/mongodb.svg"
          alt="tech"
          width={100}
          height={100}
          className="xl:w-[50px] md:w-[50px] w-[40px] h-auto"
        />
        <Image
          src="assets/nextdotjs.svg"
          alt="tech"
          width={100}
          height={100}
          className="xl:w-[50px] md:w-[50px] w-[40px] h-auto"
        /> */}
      </div>
      </motion.div>

      
    </div>
  );
};

export default Project;
