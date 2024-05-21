import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/utils/types";

type ProjectCardProps = {
  project: Project
}

function ProjectCard({ project }: ProjectCardProps) {

  return (
    <div
      className="max-w-sm max-h-[900px] h-[500px] mx-auto flex flex-col projects-center md:projects-start md:justify-center "
      key={project.projectId}
    >
      <a
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
      </a>
      <div className="w-full mt-5">
        <div className="flex projects-center justify-between">
          <a href={project.redirect_url || project.github_url} target="_blank">
            <h3 className="text-lg font-bold">{project.title}</h3>
          </a>
          <div className="space-x-2">
            {project.redirect_url && (
              <a href={project.redirect_url} target="_blank" rel="noreferrer">
                <Image
                  src="/icons/external-link.svg"
                  width={16}
                  height={16}
                  alt="Link Icon"
                />
              </a>
            )}
            {project.github_url && (
              <a href={project.github_url} target="_blank" rel="noreferrer">
                <Image
                  src="/icons/github.svg"
                  width={16}
                  height={16}
                  alt="Github Icon"
                />
              </a>
            )}
          </div>
        </div>
        <p className="text-fun-gray text-left text-sm truncate text-ellipsis">{project.description}</p>
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
