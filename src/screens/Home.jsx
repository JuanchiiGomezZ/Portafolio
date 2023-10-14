import React from 'react';
import bgHero from '../assets/bg-desktop.jpg';
import { FaLinkedin, FaGithub, FaChevronDown, FaWhatsapp } from 'react-icons/fa';

const Home = () => {
  return (
    <section className="bgHero" style={{ backgroundImage: `url(${bgHero})` }} id="home">
      <div className="presentation">
        <h1>JUAN MANUEL GOMEZ OMIL</h1>
        <div className="socials">
          <a href="https://wa.me/5493815751992" target="_blank">
            <FaWhatsapp size="35px" />
          </a>
          <a href="https://github.com/JuanchiiGomezZ" target="_blank">
            <FaGithub size="35px" />
          </a>
          <a href="https://www.linkedin.com/in/juan-manuel-gomez-omil-b8292a1ba/" target="_blank">
            <FaLinkedin size="35px" />
          </a>
        </div>
      </div>
      <a href="#aboutMe" className="down">
        <FaChevronDown size="30px" />
      </a>
    </section>
  );
};

export default Home;
