import React from "react";
import PageHeader from "../../components/pageHeader";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import "./styles.scss";
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
        </div>
        <div className="about__content__infoWrapper">
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
      </div>
    </section>
  );
};

export default About;
