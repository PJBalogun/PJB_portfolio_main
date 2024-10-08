"use client"
import Link from "next/link";
import React from "react";
import SectionTitle from "../global/SectionTitle";
import ProjectCard from "../projects/ProjectCard";
import { SanityDocument } from "next-sanity";
import useSWR from "swr";
import { client } from "@/sanity/lib/client";
import { POSTS_QUERY } from "@/sanity/lib/queries";
import { loadQuery } from "@sanity/react-loader";
import Loader from "../global/Loader";


function Projects() {
  // Define the fetcher function for SWR

  const fetcher = async (query: string) => {
    const projects = await client.fetch(query);
    return projects;
  };

  // Use SWR hook to fetch data from Sanity
  const { data, error, isLoading } = useSWR(POSTS_QUERY, fetcher);

  // Handle loading and error states
  if (error) return <div>Failed to load projects.</div>;
  if (isLoading) return <div><Loader/></div>;

  const projects: SanityDocument[] = data;
	
	return (
		<div className="flex flex-col text-left justify-between pt-8 relative">
			<div>
						<div id="learnmore">
				<SectionTitle title="Here are a few of my favorite projects." />
			</div>
			{
				projects.length > 0 ? <><div className="grid grid-cols-1 gap-2 md:gap-8 md:grid-cols-2 xl:grid-cols-3 items-start">
				{projects?.slice(0, 3).map((projectItem) => {
					return <ProjectCard key={projectItem.projectId} project={projectItem} />;
				})}
			</div>
			<div className="relative w-full mt-2">
				{projects.length > 0 && <Link href="/projects">
					<div className="mt-8 max-w-sm md:max-w-2xl border border-fun-pink mx-auto text-center w-full whitespace-nowrap px-8 py-3 rounded-full text-fun-pink bg-fun-pink-darkerer hover:bg-fun-pink hover:text-white transition-colors cursor-pointer">
						View All
					</div>
				</Link>}
			</div></> : <><div></div></>
			}
		</div>
		</div>
	);
}

export default Projects;
