import React from 'react';
import './styles.scss';
const Home = () => {
  return (
    <section id="Home" className='home'>
      <div className='home__text-wrapper'>
        <h1>
          Hello, I'm Jiachun
          <br />
          Developer
        </h1>
      </div>
      <div className='home__contact-me'>
        <button>Hire me</button>
      </div>
    </section>
  )
}

export default Home