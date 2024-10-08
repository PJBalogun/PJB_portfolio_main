
"use client"
import React,{useState} from "react";
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/utils/types";
import { Button } from "react-scroll";
import {motion} from "framer-motion"

type ProjectCardProps = {
  project: Project
}

function ProjectCard({ project }: ProjectCardProps) {
  const [showDescription, setShowDescription] = useState(false);
  const descriptionLimit = 60; // Set the character limit for description overflow

  // Check if the description exceeds the limit
  const isOverflowing = project.description[0].length > descriptionLimit;
 


  return (
    <div
      className="max-w-sm max-h-[900px] h-[30rem] mx-auto flex flex-col projects-center md:projects-start md:justify-center "
      key={project.projectId}
    >
      <Link
        href={project.redirect_url || project.github_url}
        target="_blank"
        className={`w-full relative rounded-xl border-fun-gray border p-2 transition hover:-translate-y-2 hover:opacity-75 hover:border-fun-pink will-change-projectCard`}
      >
        <Image
          className="w-full rounded-md object-cover overflow-hidden"
          src={project.posterImage}
          width={300}
          height={400}
          alt="Project Image"
          layout="responsive"
        />
      </Link>
      <div className="w-full mt-5">
        <div className="flex projects-center justify-between">
          <Link href={project.redirect_url || project.github_url} target="_blank">
            <h3 className="text-lg font-bold">{project.title}</h3>
          </Link>
          <div className="space-x-2">
            {project.redirect_url && (
              <Link href={project.redirect_url} target="_blank" rel="noreferrer">
                <Image
                  src="/icons/external-link.svg"
                  width={16}
                  height={16}
                  alt="Link Icon"
                />
              </Link>
            )}
            {project.github_url && (
              <Link href={project.github_url} target="_blank" rel="noreferrer">
                <Image
                  src="/icons/github.svg"
                  width={16}
                  height={16}
                  alt="Github Icon"
                />
              </Link>
            )}
          </div>
        </div>
        <div className="relative flex flex-col justify-between">
        <p className={`text-fun-gray text-left text-sm ${showDescription ? '' : 'truncate text-ellipsis'}`}
        style={{ overflow: showDescription ? 'visible' : 'hidden' }}>            {showDescription ? project.description : project.description.slice(0, descriptionLimit)}
</p>
        {isOverflowing && <motion.button onClick={()=> setShowDescription(prev => !prev)} className="cursor-pointer text-xs whitespace-nowrap text-fun-gray-light border-2 px-1 py-1 rounded-full border-fun-gray mt-2 bg-bg hover:text-white hover:border-white w-1/5" whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.80 }}>{showDescription ? 'Hide ' : 'Show More'}</motion.button>}
        </div>
        <ul className="flex flex-wrap items-center mt-2 -ml-2 list-none">
          {project.tags.map((tag, index) => {
            return (
              <li key={index}>
                <Link href={`/projects/tag/}`}>
                  <div className="m-1 rounded-lg text-sm bg-fun-pink-dark py-1 px-2 cursor-pointer hover:opacity-75">
                    {tag}
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default ProjectCard;
