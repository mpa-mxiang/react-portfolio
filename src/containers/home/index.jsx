import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.scss";
const Home = () => {

  const navigate = useNavigate();

  const handleNav = () => {
    
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
      <div className="home__contact-me">
        <button onClick={handleNav}>Hire me</button>
      </div>
    </section>
  );
};

export default Home;
