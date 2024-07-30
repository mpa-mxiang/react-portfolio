import React from "react";
import PageHeader from "../../components/pageHeader";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import './styles.scss';
const About = () => {
  return (
    <section id="about" className="about">
      <PageHeader headerText="About Me" icon={<BsInfoCircleFill size={40} />} />
      <div className="about__content">
        <Animate
          play
          duration={1.5}
          delay={1}
          start={{ transform: 'translateY(550px)' }}
          end={{ transform: 'translateY(0px)' }}
        >
          <div>
            <h3>Developer</h3>
            <p>{jobSummary}</p>
          </div>
        </Animate>
      </div>
    </section>
  );
};

export default About;
