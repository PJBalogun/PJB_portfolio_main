"use client"

import React from "react"
import Link from "next/link";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Image from 'next/image';
import Heading from "./Heading";

type Experience = {
    id: number;
    companyName: string;
    position: string;
    dateStarted: string;
    dateEnded: string | null;
    isCurrentlyWorkingHere: boolean;
    description: string[];
  };

type Experiences ={
    experiences: Experience[];
}
  
const ExperienceList = ({experiences} : Experiences  ) => {

  return (
    <div className="mt-10">
      <div className="min-h-[70vh] flex items-center justify-center text-white mb-16">
        <div className="max-w-3xl p-8 rounded-lg shadow-lg  bg-green-vogue-900/30">
          {/* Header Section */}
          <h1 className="text-4xl font-bold font-sans text-fun-pink-light">
            Hello, I'm Oluwapelumi Johnson 👋
          </h1>

          {/* Description Section */}
          <p className="mt-4 text-lg text-white">
            I'm a passionate Frontend Developer with a love for creating beautiful and functional user interfaces.
            My expertise includes working with React, Next.js, and exploring full-stack technologies.
          </p>

          {/* More Information Section */}
          <p className="mt-2 text-white/50">
            I aim to blend my technical expertise with creativity to bring ideas to life. Currently, I'm learning more
            about backend technologies to expand my skills. When I'm not coding, you'll find me enjoying football, 
            basketball, or exploring the latest trends in tech.
          </p>

          {/* Download Resume Section */}
          <div className="mt-6">
            <Link href="/public/Loader.svg" passHref className="inline-block bg-fun-pink text-black py-3 px-6 rounded-lg font-sans font-semibold transition-transform transform hover:-translate-y-1 hover:scale-105"
            >
        
                Download My Resume
            
            </Link>
          </div>
        </div>
      </div>

      <div>
        <Heading/>
      </div>

    <div className="relative bg-green-vogue-900/30 text-white mx-5 py-8 px-4 rounded-lg">
      <div className="sticky inset-0 bg-gradient-to-r from-gray-800 to-transparent w-16"></div>
      <div className="sticky inset-0 bg-gradient-to-l from-gray-800 to-transparent w-16 right-0"></div>
      <div className="flex space-x-4  overflow-x-scroll no-scrollbar snap-x snap-mandatory">
        {experiences.map((job) => (
          <div
            key={job.id}
            className="flex flex-col items-start bg-green-vogue-800/85 rounded-lg px-5 py-10 flex-none w-[300px] md:w-[400px] flex-shrink-0 snap-center"
          >
         <div className="flex justify-center w-full pt-10">
         <Image
              src="/logos/logo.svg"
              width={60}
              height={60}
              alt="aa"
              className = "rounded-full object-cover "
            
            />
         </div>
            <h2 className="text-lg font-bold mt-4">{job.companyName}</h2>
            <p className="text-md font-semibold text-white">{job.position}</p>
            <p className=" text-sm mt-2">
              {job.dateStarted} -{" "}
              {job.isCurrentlyWorkingHere ? "Present" : job.dateEnded}
            </p>
            <ul className=" mt-4">
              {job.description.map((desc, index) => (
                <li key={index} className="text-sm text-start leading-6 mt-4">
                  {desc}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default ExperienceList;
