import React, { useState } from 'react';
import { BsInfoCircleFill } from 'react-icons/bs';
import { HiExternalLink } from 'react-icons/hi';
import { TbBrandGithubFilled } from 'react-icons/tb';
import PageHeader from '../../components/pageHeader';
import Img from '../../images/spcial-work.png';
import './styles.scss';
import Popup from '../../components/popup/index';

const projectData = [
  {
    id: 2,
    name: 'project1',
    image: Img,
    link: '',
    stacks: '<li>HTML</li><li>CSS</li><li>JavaScript</li>',
  },
  {
    id: 3,
    name: 'project2',
    image: Img,
    link: '',
    stacks: '<li>HTML</li><li>CSS</li><li>JavaScript</li>',
  },
  {
    id: 4,
    name: 'project3',
    image: Img,
    link: '',
    stacks: '<li>HTML</li><li>CSS</li><li>JavaScript</li>',
  },
  {
    id: 2,
    name: 'project4',
    image: Img,
    link: '',
    stacks: '<li>HTML</li><li>CSS</li><li>JavaScript</li>',
  },
  {
    id: 2,
    name: 'project5',
    image: Img,
    link: '',
    stacks: '<li>HTML</li><li>CSS</li><li>JavaScript</li>',
  },
  {
    id: 2,
    name: 'project6',
    image: Img,
    link: '',
    stacks: '<li>HTML</li><li>CSS</li><li>JavaScript</li>',
  },
  {
    id: 2,
    name: 'project7',
    image: Img,
    link: '',
    stacks: '<li>HTML</li><li>CSS</li><li>JavaScript</li>',
  },
];

const filterData = [
  {
    filterId: 1,
    label: 'All',
  },
  {
    filterId: 2,
    label: 'Front End',
  },
  {
    filterId: 3,
    label: 'Back End',
  },
  {
    filterId: 4,
    label: 'Full Stack',
  },
];

const Projects = () => {
  const [filteredVal, setFilteredVal] = useState(1);
  const [hoverVal, setHoveredVal] = useState(null);
  const [btnPopup, setBtnPopup] = useState(false);
  const [activeProject, setActiveProject] = useState(null);

  function handleFilter(currentId) {
    setFilteredVal(currentId);
  }

  function handleHover(index) {
    setHoveredVal(index);
  }

  const filteredItems = filteredVal === 1
    ? projectData
    : projectData.filter((item) => item.id === filteredVal);

  return (
    <section id="projects" className="projects">
      <PageHeader headerText="Projects" icon={<BsInfoCircleFill size={40} />} />
      <div className="projects__content">
        <ul className="projects__content__filter">
          {filterData.map((item) => (
            <li
              className={item.filterId === filteredVal ? 'active' : ''}
              onClick={() => handleFilter(item.filterId)}
              key={item.filterId}
              role="none"
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className="projects__content__cards">
          {filteredItems.map((item, index) => (
            <div
              className="projects__content__cards__item"
              key={`cardItem-${item.name.trim()}`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="projects__content__cards__item__img-wrapper">
                <a href={item.link || '#!'}>
                  <img alt={item.name} src={item.image} />
                </a>
              </div>
              {index === hoverVal && (
                <div className="overlay">
                  <div>
                    <p>{item.name}</p>
                    <button
                      onClick={() => {
                        setActiveProject(item);
                        setBtnPopup(true);
                      }}
                      type="button"
                    >
                      Visit
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <Popup trigger={btnPopup} setTrigger={setBtnPopup}>
        {activeProject ? (
          <div>
            <h3>{activeProject.name}</h3>
            <div className="projects__popup">
              <img alt={activeProject.name} src={activeProject.image} />
              <div className="projects__popup__texts">
                <p>
                  This is more information about
                  {activeProject.name}
                  .
                </p>
                <ul>{activeProject.stacks}</ul>
                <button type="button">
                  See Live
                  <HiExternalLink
                    size={30}
                    color="var(--yellow-theme-sub-text-color)"
                    className="projects__popup__icons"
                    type="button"
                  />
                </button>

                <button type="button">
                  See Source
                  <TbBrandGithubFilled
                    size={30}
                    color="var(--yellow-theme-sub-text-color)"
                    className="projects__popup__icons"
                    type="button"
                  />
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </Popup>
    </section>
  );
};

export default Projects;
