import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.scss";
import { Animate } from "react-simple-animate";
const Home = () => {

  const navigate = useNavigate();

  const handleNav = () => {
    navigate("/contact");
  }
  return (
    <section id="Home" className="home">
      <div className="home__text-wrapper">
        <h1>
          Hello, I'm Jiachun
          <br />
          Developer
        </h1>
      </div>
      <Animate
      play duration={1.5}
      delay={1}
      start={{transform : 'translateY(550px)'}}
      end={{transform : 'translateY(0px)'}}
      >
        <div className="home__contact-me">
          <button onClick={handleNav}>Hire me</button>
        </div>
      </Animate>
      
    </section>
  );
};

export default Home;
