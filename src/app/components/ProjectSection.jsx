import React from "react";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "E-commerce Application",
    description: "Project 1 description",
    image: "/images/projects/ecommerce_proj.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/chiemgiabaost/my-repo",
    previewUrl: "https://my-repo-five-xi.vercel.app/",
  },
  {
    id: 2,
    title: "BrainFast-ChatGPT Application",
    description: "Project 2 description",
    image: "/images/projects/brainfast.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/chiemgiabaost/brainfast.github.io",
    previewUrl: "https://brainfast-nty04ri2m-baos-projects-1ed80014.vercel.app/",
  },
  
];

const ProjectSection = () => {
  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>  
      <ul  className="grid md:grid-cols-3 gap-8 md:gap-12">
      {projectsData.map((project) => (
          <ProjectCard
            imgUrl={project.image}
            title={project.title}
            key={project.id}
            description={project.description}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </ul>
    </section>
  );
};

export default ProjectSection;
