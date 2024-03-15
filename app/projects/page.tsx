import Heading from "@/components/projects/Heading";
import More from "@/components/projects/More";
import Projects from "@/components/projects/Projects";
import React from "react";
import { loadQuery } from "@/sanity/lib/store";
import { POSTS_QUERY,  } from "@/sanity/lib/queries";
async function  AllProjects() {
  const initial = await loadQuery<[]>(POSTS_QUERY);

  return (
    <div>
      <Heading />
      <Projects projects={initial.data} />
      <More />
    </div>
  );
}

export default AllProjects;