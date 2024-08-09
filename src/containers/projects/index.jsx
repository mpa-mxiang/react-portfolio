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
    name: "project2",
    image: Img,
  },
  {
    id: 2,
    name: "project3",
    image: Img,
  },
  {
    id: 2,
    name: "project4",
    image: Img,
  },
  {
    id: 2,
    name: "project5",
    image: Img,
  },

  {
    id: 2,
    name: "project6",
    image: Img,
  },
  {
    id: 2,
    name: "project7",
    image: Img,
  },
];

const filterData = [
  {
    filterId: 1,
    label: "All",
  },
  {
    filterId: 2,
    label: "Front End",
  },
  {
    filterId: 3,
    label: "Back End",
  },
  {
    filterId: 4,
    label: "Full Stack",
  },
]

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <PageHeader headerText="Projects" icon={<BsInfoCircleFill size={40} />} />
      <div className="projects__content">
        <ul className="projects__content__filter">
          {filterData.map((item=>(
            <li key={item.filterId}>
              {item.label}
            </li>
          )))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
