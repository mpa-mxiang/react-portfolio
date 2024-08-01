import React from "react";
import PageHeader from "../../components/pageHeader";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import "./styles.scss";
import { DiApple } from 'react-icons/di';
import { FaDev, FaDatabase } from 'react-icons/fa';
const personDetails = [
  {
    label: "name",
    value: "Jiachun Xiang",
  },
  {
    label: "Address",
    value: "Canada",
  },
  {
    label: "Email",
    value: "jcxiang1230@gmail.com",
  },
];

const jobSummary = `
I am a passionate and dedicated developer with a Bachelor's degree in Computer Science. 
My expertise spans both front-end and back-end development. I am proficient 
in HTML, CSS, and ReactJS on the front-end, creating intuitive and responsive user interfaces. I excel in languages like Python 
and other technologies on the back end, ensuring robust and efficient server-side logic. I am committed 
to continuous learning and regularly update my skills to stay at the forefront of technological advancements. 
I aim to leverage my diverse skill set to build innovative and impactful software solutions.
`;

const About = () => {
  return (
    <section id="about" className="about">
      <PageHeader headerText="About Me" icon={<BsInfoCircleFill size={40} />} />
      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{ transform: "translateX(550px)" }}
            end={{ transform: "translateX(0px)" }}
          >
            <div>
              <h3>Developer</h3>
              <p>{jobSummary}</p>
            </div>
          </Animate>
        
        
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{ transform: "translateY(500px)" }}
            end={{ transform: "translateY(0px)" }}
          >
            <h3 className="personalInfoText">Personal Info</h3>
            <ul>
              {personDetails.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className="about__content__infoWrapper">
      </div>
      </div>

    </section>
  );
};

export default About;
