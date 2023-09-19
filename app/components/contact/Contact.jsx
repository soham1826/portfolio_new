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

const Contact = ({pageInfo}) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (formData) => {
    window.location.href = `mailto:kulsoham18262@gmail.com?subject=${formData.subject}&body= Hi my name is ${formData.name}, ${formData.message} (${formData.email})`;
  };

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
                className="contact-input w-[50%] "
                type="text"
                placeholder="Name"
              />
              <input
                {...register("email")}
                className="contact-input w-[50%]"
                type="text"
                placeholder="Email"
              />
            </div>
            <input
              {...register("subject")}
              className="contact-input w-[100%]"
              type="text"
              placeholder="Subject"
            />
            <textarea
              {...register("message")}
              className="contact-input w-[100%]"
              placeholder="Message"
            />
            <button className="bg-Scream p-3 rounded-md text-Sblack">
              Submit
            </button>
          </form>

          <motion.div
            initial={{
              opacity: 0,
              y: 100,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1.2,
            }}
            viewport={{
              once: true,
            }}
            className="flex flex-row items-center justify-center gap-4 "
          >
            <SocialIcon
              className="hover:scale-[1.2] w-4  p-2 "
              url="https://github.com/soham1826"
              fgColor="white"
              bgColor="transparent"
            />

            <SocialIcon
              className="hover:scale-[1.2] w-4 "
              fgColor="Blue"
              url="https://www.linkedin.com/in/soham-ashok-kulkarni/"
              bgColor="transparent"
            />

            <SocialIcon
              className="hover:scale-[1.2] "
              fgColor="SkyBlue"
              url="https://twitter.com/kulsoham18262"
              bgColor="transparent"
            />

            <SocialIcon
              className="hover:scale-[1.2]"
              fgColor="Pink"
              url="https://www.instagram.com/soham.jsx/"
              bgColor="transparent"
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
