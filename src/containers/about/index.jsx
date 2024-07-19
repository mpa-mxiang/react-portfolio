import React from 'react';
import PageHeader from '../../components/pageHeader';
import { BsInfoCircleFill } from "react-icons/bs";
const About = () => {
  return (
    <section id="about" className='about'>
      <PageHeader
      headerText = "About Me"
      icon={BsInfoCircleFill size={40}} />
    </section>
  )
}

export default About