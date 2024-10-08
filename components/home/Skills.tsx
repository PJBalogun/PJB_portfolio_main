"use client"


import React from "react";
import { skills } from "@/app/lib/homePageData";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionTitle from './../global/SectionTitle';

function Skills() {
  return (
      <div>
    <SectionTitle title="I got the experience."/>
    <div className="flex flex-col md:flex-row justify-between  h-[70vh]">
  
  <motion.h2 className="relative flex mt-20 sm:justify-between justify-center items-center text-2xl w-full text-center text-green-vogue-300 md:text-left font-bold md:max-w-lg mb-10 md:mr-10 md:mb-0 md:w-max mr-0 "  initial={{ opacity: 0, scale: 0.5, x: 300, y:-200 }}
    whileInView={{ opacity: 1, scale: 1, x:0 ,y:0 }}
    transition={{ duration: 0.6 }}>
        
        Here is my toolbelt for success.
        {/* <img
          className="sqD bottom-[-80px] left-[-50px] lg:bottom-[-50px] lg:left-[-35px] z-[-10]"
          src="/static/doodles/skills/laptop.svg"
        />
        <img
          className="sqD hidden md:block top-[140px] right-0 lg:top-[105px]"
          src="/static/doodles/skills/coding.svg"
        />
        <img
          className="sqD hidden md:block top-[200px] right-[50px] lg:top-[170px] lg:right-[50px]"
          src="/static/doodles/skills/youtube.svg"
        />
        <img
          className="sqD top-[-15px] right-[-15px]"
          src="/static/doodles/skills/fillStar.svg"
        /> */}
      </motion.h2>
      <motion.div className="relative max-w-lg w-full mx-auto md:mx-none grid gap-x-8 gap-y-12 sm:gap-8 md:gap-12 grid-cols-3 sm:grid-cols-6 items-center place-content-center" initial={{ opacity: 0, scale: 0.5, x: -300, y:200 }}
    whileInView={{ opacity: 1, scale: 1, x:0 ,y:0 }}
    transition={{ duration: 0.7 }}>
        {skills.map((item, index) => {
          return (
            <div
              title={item.title}
              key={index}
              className="w-10 mx-auto flex items-center flex-col justify-center"
            >
              {/* <img src={item.icon}  /> */}
              <div style={item.style}>
                <Image src={item.icon} height={60} width={60} alt={item.title + "-icon"} />
              </div>
              <p className="text-xs text-fun-gray font-bold mt-3 opacity-80">
                {item.title}
              </p>
            </div>
          );
        })}
      </motion.div>
    </div>
    </div>
  );
}

export default Skills;
