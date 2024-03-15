import Link from "next/link";
import React from "react";
import SectionTitle from "../global/SectionTitle";
import ProjectCard from "../projects/ProjectCard";
import { SanityDocument } from "next-sanity";
import { loadQuery } from "@/sanity/lib/store";
import { POSTS_QUERY,  } from "@/sanity/lib/queries";



async function Projects() {
	const intial = await loadQuery<[]>(POSTS_QUERY);
	// const final  = await loadQuery<[]>(POSTS_FEATURE_QUERY);
	// console.log(final.data)

	const projects : SanityDocument[] = intial.data;
  

	return (
		<div className="flex flex-col text-left justify-between pt-8 relative">
			{
				projects ? <div>
						<div id="learnmore">
				<SectionTitle title="Here are a few of my favorite projects." />
			</div>
			<div className="grid grid-cols-1 gap-10 md:gap-6 md:grid-cols-3 items-start">
				{projects?.slice(0, 3).map((projectItem) => {
					return <ProjectCard key={projectItem.projectId} project={projectItem} />;
				})}
			</div>
			<div className="relative w-full mt-2">
				<Link href="/projects">
					<div className="mt-8 max-w-sm md:max-w-2xl border border-fun-pink mx-auto text-center w-full whitespace-nowrap px-8 py-3 rounded-full text-fun-pink bg-fun-pink-darkerer hover:bg-fun-pink hover:text-white transition-colors cursor-pointer">
						View All
					</div>
				</Link>
			</div>
				</div> : <><div>No Projects yet</div></>
			}
		</div>
	);
}

export default Projects;
