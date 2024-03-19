"use client"

import React from "react"
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Image from 'next/image';

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
    <div className="relative bg-[#0d1b29] text-white py-8 px-4  ">
      <div className="sticky inset-0 bg-gradient-to-r from-gray-800 to-transparent w-16"></div>
      <div className="sticky inset-0 bg-gradient-to-l from-gray-800 to-transparent w-16 right-0"></div>
      <div className="flex space-x-4  overflow-x-scroll no-scrollbar snap-x snap-mandatory">
        {experiences.map((job) => (
          <div
            key={job.id}
            className="flex flex-col items-start bg-[#0070e0] rounded-lg px-5 py-10 flex-none w-[300px] md:w-[400px] flex-shrink-0 snap-center opacity-50 hover:opacity-100"
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
            <p className="text-md font-semibold text-[#ffffff]">{job.position}</p>
            <p className=" text-sm [#ffffff] mt-2">
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
  );
};

export default ExperienceList;
