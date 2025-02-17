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


	
	return (
		<div className="flex flex-col text-left justify-between pt-8 relative">
			<Loader/>

		</div>
	);
}

export default Projects;
