import React from 'react'
import PageHeader from '../../components/pageHeader';
import { BsInfoCircleFill } from "react-icons/bs";

const Projects = () => {
  return (
    <section id="projects" className='projects'>
      <PageHeader
        headerText="Projects"
        icon={<BsInfoCircleFill size={40} />} 
      />
    </section>
  )
}

export default Projects