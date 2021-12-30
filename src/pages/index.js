import React from "react";
import { graphql } from "gatsby";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Jobs from "../components/Jobs";
import Projects from "../components/Projects";
import Seo from "../components/Seo";
import ProjectsData from "../assets/projectsData/ProjectsData";

const IndexPage = () => {
  return (
    <>
      <main>
        <Hero />
        <Services />
        <Jobs />
        <Projects title={"New projects"} projects={ProjectsData} showLink />
      </main>
    </>
  );
};

export default IndexPage;
