import React, { Fragment } from "react";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "TUNA - Fotografía",
    description: "",
    image: "",
    tag: ["All", "Web"],
  },
  {
    id: 2,
    title: "TUNA - Fotografía",
    description: "",
    image: "",
    tag: ["All", "Web"],
  },
];

const ProjectSection = () => {
  return (
    <Fragment>
      <h2>Mis Proyectos</h2>
      <div>
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
          />
        ))}
      </div>
    </Fragment>
  );
};

export default ProjectSection;
