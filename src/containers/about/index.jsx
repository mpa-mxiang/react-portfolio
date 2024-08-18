import React from 'react';
import { BsInfoCircleFill } from 'react-icons/bs';
import { Animate } from 'react-simple-animate';
import './styles.scss';
import { DiGit, DiGithub } from 'react-icons/di';
import { FaDev, FaDatabase } from 'react-icons/fa';
import PageHeader from '../../components/pageHeader';

const summary = `
I am a passionate and dedicated developer with a Bachelor's degree in Computer Science. 
My expertise spans both front-end and back-end development. I am proficient 
in HTML, CSS, and ReactJS on the front-end, creating intuitive and responsive user interfaces. 
I excel in languages like Python and other technologies on the back-end, ensuring robust and 
efficient server-side logic. I am committed to continuous learning and regularly update my skills 
to stay at the forefront of technological advancements. I aim to leverage my diverse skill set to 
build innovative and impactful software solutions.
`;

const About = () => (
  <section id="about" className="about">
    <PageHeader headerText="About Me" icon={<BsInfoCircleFill size={40} />} />
    <div className="about__content">
      <div className="about__content__personalWrapper">
        <Animate
          play
          duration={1.5}
          delay={1}
          start={{ transform: 'translateX(-900px)' }}
          end={{ transform: 'translateX(0px)' }}
        >
          <div>
            <h3>Get to know me!</h3>
            <p>{summary}</p>
          </div>
        </Animate>
        <Animate
          play
          duration={1.5}
          delay={1}
          start={{ transform: 'translateX(-900px)' }}
          end={{ transform: 'translateX(0px)' }}
        >
          <h3 className="skillText">My Skills</h3>
          <ul className="skillList">
            <li className="skillItem">HTML</li>
            <li className="skillItem">CSS/SCSS</li>
            <li className="skillItem">ReactJS/Redux</li>
            <li className="skillItem">GitHub/Git</li>
            <li className="skillItem">Jest</li>
            <li className="skillItem">Python</li>
            <li className="skillItem">Django</li>
            <li className="skillItem">Firebase</li>
            <li className="skillItem">Ruby</li>
            <li className="skillItem">Ruby on Rails</li>
            <li className="skillItem">PostgreSQL</li>
          </ul>
        </Animate>
      </div>
      <Animate
        play
        duration={1.5}
        delay={1}
        start={{ transform: 'translateX(600px)' }}
        end={{ transform: 'translateX(0px)' }}
      >
        <div className="about__content__infoWrapper">
          <div className="about__content__infoWrapper__content">
            <div>
              <FaDev size={60} color="var(--yellow-theme-main-color)" />
            </div>
            <div>
              <DiGit size={80} color="var(--yellow-theme-main-color)" />
            </div>
            <div>
              <DiGithub size={80} color="var(--yellow-theme-main-color)" />
            </div>
            <div>
              <FaDatabase size={60} color="var(--yellow-theme-main-color)" />
            </div>
          </div>
        </div>
      </Animate>
    </div>
  </section>
);

export default About;
