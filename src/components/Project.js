import React from "react";
// import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { FaGithubSquare, FaShareSquare } from "react-icons/fa";
import { Link } from "gatsby";


const Project = ({
  title,
  slug,
  description,
  github,
  url,
  stack,
  imageUrl,
  index,
  
}) => {


  return (
    <article className="project">
      <img src={imageUrl} alt={title} className="project-img" />
      <div className="project-info">
        <span className="project-number">0{index + 1}.</span>

       
          <h3>{title}</h3>
        
        <p className="project-desc">{description}</p>
        <div className="project-stack">
          {stack.map((tech) => {
            return <span key={tech.id}>{tech.name}</span>;
          })}
        </div>
        <div className="project-links">
          <a href={github}>
            <FaGithubSquare className="project-icon"></FaGithubSquare>
          </a>
          <a href={url}>
            <FaShareSquare className="project-icon"></FaShareSquare>
          </a>
        </div>
      </div>
    </article>
  );
};

export default Project;
