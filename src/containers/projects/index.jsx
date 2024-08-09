import React from "react";
import PageHeader from "../../components/pageHeader";
import { BsInfoCircleFill } from "react-icons/bs";
import Img from "../../images/special-work.png";

const projectData = [
  {
    id: 2,
    name: "project1",
    image: Img,
  },
  {
    id: 3,
    name: "project1",
    image: Img,
  },
  {
    id: 2,
    name: "project1",
    image: Img,
  },
  {
    id: 2,
    name: "project1",
    image: Img,
  },
  {
    id: 2,
    name: "project1",
    image: Img,
  },

  {
    id: 2,
    name: "project1",
    image: Img,
  },
  {
    id: 2,
    name: "project1",
    image: Img,
  },
];
const Projects = () => {
  return (
    <section id="projects" className="projects">
      <PageHeader headerText="Projects" icon={<BsInfoCircleFill size={40} />} />
    </section>
  );
};

export default Projects;
