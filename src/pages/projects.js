import React from "react";
import ProjectsData from "../assets/projectsData/ProjectsData";
import Projects from "../components/Projects";
import Seo from "../components/Seo";

const ProjectsPage = () => {
  return (
    <main>
      <section className="projects-page">
        <Projects
          title="all projects"
          projects={ProjectsData}
          showLink={false}
        />
      </section>
    </main>
  );
};

export default ProjectsPage;
