"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  HeartIcon,
  PhoneIcon,
  MapPinIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/solid";
import { SocialIcon } from "react-social-icons";
import { useForm } from "react-hook-form";
import SocialNav from "../socialNav/SocialNav";

const Contact = ({pageInfo, social}) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (formData) => {
    window.location.href = `mailto:kulsoham18262@gmail.com?subject=${formData.subject}&body= Hi my name is ${formData.name}, ${formData.message} (${formData.email})`;
  };

  const getCurrentYear =()=> {
    return new Date().getFullYear();
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex flex-col items-center justify-center overflow-x-auto "
    >
      <div className="flex flex-col px-2 h-[80%] w-screen mt-8">
        <h3 className="xl:text-4xl text-3xl text-Scream tracking-[20px] font-poppins uppercase text-center">
          CONTACT
        </h3>

        <div className="text-center mt-5 flex flex-col space-y-10 ">
          <h4 className="xl:text-3xl md:text-2xl text-xl text-Swhite font-poppins items-center text-center">

            Wanna Talk ? Feel free to
            <span className="text-Scream"> Contact me</span>
          </h4>
          <div className="flex flex-col space-y-5">
            <div className="flex items-center space-x-5 justify-center text-Swhite font-poppins xl:text-xl text-lg gap-2">
              <PhoneIcon className="text-Scream h-7 w-7 animate-bounce" />{" "}
              {pageInfo[0].phoneNumber}
            </div>
            <div className="flex items-center space-x-5 gap-2 justify-center text-Swhite font-poppins xl:text-xl text-lg">
              <EnvelopeIcon className="text-Scream h-7 w-7 animate-bounce" />{" "}
              {pageInfo[0].email}
            </div>
            <div className="flex items-center space-x-5 justify-center text-Swhite font-poppins xl:text-xl text-lg gap-2">
              <MapPinIcon className="text-Scream h-7 w-7 animate-bounce" />
              {pageInfo[0].address}
            </div>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col space-y-2 mx-auto w-fit font-poppins text-lg px-2 "
            autoComplete="off"
          >
            <div className="flex space-x-2 ">
              <input
                {...register("name")}
                className="contact-input-new
                 w-[50%] "
                type="text"
                placeholder="Name"
              />
              <input
                {...register("email")}
                className="contact-input-new
                 w-[50%]"
                type="text"
                placeholder="Email"
              />
            </div>
            <input
              {...register("subject")}
              className="contact-input-new
               w-[100%]"
              type="text"
              placeholder="Subject"
            />
            <textarea
              {...register("message")}
              className="contact-input-new
               w-[100%]"
              placeholder="Message"
            />
            <button className="bg-Scream p-3 rounded-md text-Sblack">
              Submit
            </button>
          </form>
        </div>
         <div className="p-3 mt-2"><SocialNav social={social}/></div>
      <footer className="p-3 mt-1 font-poppins text-Swhite text-center"> Copyright © {getCurrentYear()} <span className="text-Scream"> Made by Soham Kulkarni</span></footer>
      </div>


    </motion.div>
  );
};

export default Contact;
