import React, { useState } from "react";
import PageHeader from "../../components/pageHeader";
import { BsInfoCircleFill } from "react-icons/bs";
import Img from "../../images/spcial-work.png";
import "./styles.scss";
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
    id: 4,
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
];

const Projects = () => {
  const [filteredVal, setFilteredVal] = useState(1);

  function handleFilter(currentId) {
    setFilteredVal(currentId);
  }

  const filteredItems = filteredVal === 1 ? 
  projectData : projectData.filter(item=>item.id === filteredVal);

  return (
    <section id="projects" className="projects">
      <PageHeader headerText="Projects" icon={<BsInfoCircleFill size={40} />} />
      <div className="projects__content">
        <ul className="projects__content__filter">
          {filterData.map((item) => (
            <li className={item.filterId === filteredVal ? 'active': ''} onClick={() => handleFilter(item.filterId)} key={item.filterId}>
              {item.label}
            </li>
          ))}
        </ul>
        <div className="projects__content__cards">
          {filteredItems.map((item) => (
            <div
              className="projects__content__cards__item"
              key={`cardItem-${item.name.trim()}`}
            >
              <div className="projects__content__cards__item__img-wrapper">
                <a>
                  <img alt="dummy project" src={item.image} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
