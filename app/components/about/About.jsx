/* eslint-disable react/no-unescaped-entities */
"use client";
import { motion } from "framer-motion";
// import { getAbout } from "@/sanity/sanity-utils";
import Image from "next/image";
import { client, getAbout } from "@/sanity/sanity-utils";
import { groq } from "next-sanity";


const About= ({pageInfo}) => {
  return (
    <div className=" w-screen h-screen flex flex-col justify-center gap-8 md:px-36 px-8 items-center">
      <div className="h-[80%] flex flex-col">
      <h3 className="uppercase tracking-[20px] text-Scream font-poppins text-4xl text-center">
        About
      </h3>

      <div className="flex xl:flex-row md:flex-col flex-col text-center xl:text-left justify-center items-center w-full h-fit gap-5 mt-10">
        <motion.img
          initial={{
            x: -200,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1.2,
          }}
          viewport={{
            once: true,
          }}
          src={pageInfo[0].profilePic}
          className="flex-shrink-0 object-cover rounded-full w-56 h-56 md:w-[300px] md:h-[300px] md:rounded-lg xl:w-[500px] xl:h-[500px] xl:rounded-md"
          />

        <div className="flex flex-col">
          <h4 className="font-poppins text-3xl text-Swhite mt-3 text-center">
            Some Info About me
          </h4>
          <p className="mt-3 font-roboto text-lg md:text-xl xl:text-3xl font-light text-Scream space-y-">
            👋 Hey there, I'm{" "}
            <span className="text-Swhite">{pageInfo[0].name}</span>{pageInfo[0].backgroundInformation}
          </p>
        </div>
      </div>
      </div>
      
    </div>   
  );
};
export default About;







