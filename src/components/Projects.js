import React from "react";
import Title from "./Title";
import Project from "./Project";
import { Link } from "gatsby";
const Projects = ({ projects, title, showLink }) => {
  
  if (showLink) {
    projects = projects.filter((item) => {
      return item.featured === true;
    });
    console.log("here");
  }

  console.log(projects);

  return (
    <section className="section projects">
      <Title title={title} />
      <div className="section-center projects-center">
        {projects.map((project, index) => {
          return <Project key={project.id} {...project} index={index} />;
        })}
      </div>
      {showLink && (
        <Link to="/projects" className="btn center-btn">
          All projects
        </Link>
      )}
    </section>
  );
};

export default Projects;
