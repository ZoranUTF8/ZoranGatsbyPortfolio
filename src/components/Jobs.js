import React from "react";
import Title from "./Title";
import { FaAngleDoubleRight } from "react-icons/fa";
import { graphql, useStaticQuery } from "gatsby";
import { Link } from "gatsby";
import { useState } from "react";

const query = graphql`
  {
    allStrapiJob(sort: { fields: data___attributes___createdAt, order: DESC }) {
      nodes {
        data {
          attributes {
            company
            position
            date
            desc {
              name
              id
            }
          }
        }
      }
    }
  }
`;

const Jobs = () => {
  const data = useStaticQuery(query);

  const [value, setValue] = useState(0);

  const {
    allStrapiJob: { nodes: jobs },
  } = data;

  const { company, position, date, desc } = jobs[0].data[value].attributes;
  const allCompanies = jobs[0].data;

  return (
    <section className="sections jobs">
      <Title title={"experience"} />
      <div className="jobs-center">
        {/* btn container */}
        <div className="btn-container">
          {allCompanies.map((job, index) => {
            return (
              <button
                key={index}
                className={index === value ? "job-btn active-btn" : "job-btn"}
                onClick={() => {
                  setValue(index);
                }}
              >
                {job.attributes.company}
              </button>
            );
          })}
        </div>
        {/* job info */}
        <article className="job-info">
          <h3>{position}</h3>
          <h4>{company}</h4>
          <p className="job-date">{date}</p>
          {desc.map((item) => {
            return (
              <div key={item.id} className="job-desc">
                <FaAngleDoubleRight className="job-icon" />
                <p>{item.name}</p>
              </div>
            );
          })}
        </article>
      </div>
      <Link to="/about" className="btn center-btn">
        More info
      </Link>
    </section>
  );
};

export default Jobs;
