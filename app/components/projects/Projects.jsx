"use client";

import React from "react";
import { motion } from "framer-motion";
import Project from "./Project";
import Image from "next/image";
import Link from "next/link";
import { SiAirplayvideo, SiGithub } from "react-icons/si";
import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import OtherProjects from "./OtherProjects";
import { FolderIcon } from "@heroicons/react/24/outline";

const Projects = ({projects,otherProjects}) => {
  const projectsNew = projects.reverse();
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex flex-col  items-center justify-center"
    >
      <div className="h-[80%] items-center  flex flex-col mt-10">
        <h3 className="xl:text-4xl md:text-3xl text-2xl text-Scream tracking-[20px] font-poppins uppercase">
          Projects
        </h3>
        <p className="uppercase font-poppins xl:text-2xl text-lg text-gray-300 opacity-20 tracking-wider mt-2 flex flex-row items-center gap-2">
          Some of my featured Work
          <span>
            <ArrowRightCircleIcon className="w-10" />
          </span>{" "}
        </p>

        <div className="w-screen h-auto mt-8">
          <Carousel
            responsive={responsive}
            className="w-screen h-auto"
          >
            {projectsNew.map((project,index)=> <Project key={index} title={project.title} image={project.image} summary={project.summary} sourceCode={project.linktoSourceCode} demo={project.linktoDemo} technologies={project.technologies} />)}
           
          
            <div className="flex justify-center items-center h-fit w-full">
            <div className="w-full h-full bg-Sblack xl:px-40 md:px-32 px-10 grid justify-center items-center gap-x-0 xl:grid-cols-4 md:grid-cols-4 grid-cols-2 ml-4">
              {otherProjects.map((otherProject,index)=><OtherProjects key={index} title={otherProject.title} sourceCode={otherProject.linktoSourceCode} />)}
            </div>
            </div>
            
          </Carousel>
        </div>
      </div>

      {/* <div className='w-full h-[500px] bg-Scream/10 -skew-y-12 absolute top-[30%] '/> */}
    </motion.div>
  );
};

export default Projects;
