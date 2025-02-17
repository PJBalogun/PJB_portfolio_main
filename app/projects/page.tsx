import Heading from "@/components/projects/Heading";
import More from "@/components/projects/More";
import Projects from "@/components/projects/Projects";
import React from "react";
import { loadQuery } from "@/sanity/lib/store";
import { POSTS_QUERY } from "@/sanity/lib/queries";
import Loader from "@/components/global/Loader";

async function AllProjects() {
  try {
    const initial = await loadQuery<[]>(POSTS_QUERY);

    if (!initial || !initial.data || initial.data.length === 0) {
      return <div><Loader/></div>;
    }

    return (
      <div>
        <Heading />
        <Projects projects={initial.data} />
        <More />
      </div>
    );
  } catch (error) {
    return <div>Failed to load projects. Please try again later.</div>;
  }
}

export default AllProjects;
