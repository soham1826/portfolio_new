"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { SiGithub, SiAirplayvideo } from "react-icons/si";



const Project = ({title,image,demo,sourceCode,summary,technologies}) => {
  return (
    <div className="w-screen h-auto  flex flex-col space-y-5 items-center justify-center px-10 md:px-20  text-center ">
      <div
      className="flex flex-col items-center justify-center text-center gap-2">
        <h3 className="text-Scream font-poppins xl:text-4xl md:text-3xl text-xl ">
          {title}
        </h3>
        <Image
          src={image}
          alt="none"
          className="xl:w-[600px] lg:w-[500px] md:w-[400px] w-[200px]  h-auto rounded-lg"
          width={1000}
          height={1000}
        />
        <p className="xl:text-2xl md:text-xl text-base text-Swhite xl:w-[60%] font-poppins px-5 mt-1 ">
          {summary}
        </p>

        <div className="flex flex-row gap-2">
        <a
          href={sourceCode}
          className="nav_link flex flex-row gap-2 font-poppins text-md items-center text-center justify-center w-[100px] h-auto"
        >
          <SiGithub />
          <p>Code</p>
        </a>
        <a
          href={demo}
          className="nav_link flex flex-row gap-2 font-poppins text-md items-center text-center justify-center w-[100px] h-auto"
        >
          <SiAirplayvideo />
          <p>Demo</p>
        </a>
      </div>

      <div className="flex flex-row gap-4 items-center justify-evenly">
        <ul  className=" list-inside flex flex-row items-center justify-evenly">
          {technologies.map((technology,index)=><li key={index} className="tech-names">{technology.title}</li>)}
          
          
    
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
      </div>

      
    </div>
  );
};

export default Project;
