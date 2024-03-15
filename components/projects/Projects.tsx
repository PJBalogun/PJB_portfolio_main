import { Project } from "@/app/utils/types"

import ProjectCard from "./ProjectCard";

type ProjectProps ={
  projects: Project[]
}

function Projects( {projects} : ProjectProps) {

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3 items-start">
      {projects?.map((project) => {
        return <ProjectCard key={project.projectId} project={project} />;
      })}
    </div>
  );
}

export default Projects;
