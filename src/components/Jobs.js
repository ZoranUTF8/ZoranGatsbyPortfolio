import React from "react";
import Title from "./Title";
import { FaAngleDoubleRight } from "react-icons/fa";
import { graphql, useStaticQuery } from "gatsby";
import { Link } from "gatsby";

const query = graphql`
  {
    allStrapiJob {
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
  console.log(data);
  return <h2>jobs component</h2>;
};

export default Jobs;
