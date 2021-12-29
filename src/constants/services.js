import React from "react";
import { FaNode, FaJava, FaReact } from "react-icons/fa";
import { GrGatsbyjs } from "react-icons/Gr";
import { SiNetlify } from "react-icons/Si";
const services = [
  {
    id: 1,
    icon: <FaJava className="service-icon" />,
    title: "Java",
    text: ``,
  },
  {
    id: 2,
    icon: <FaNode className="service-icon" />,
    title: "Node",
    text: ``,
  },
  {
    id: 3,
    icon: <FaReact className="service-icon" />,
    title: "React",
    text: ``,
  },
  {
    id: 4,
    icon: <GrGatsbyjs className="service-icon" />,
    title: "Gatsby",
    text: ``,
  },
];

export default services;
