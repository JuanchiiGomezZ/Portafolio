import React, { useEffect, useState } from 'react';
import logoWhite from '../assets/logo-white.png';
import logoBlack from '../assets/logo-Black.png';

import { HiDownload } from 'react-icons/hi';

const navBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const isMobile = window.innerWidth <= 800;

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`${!isScrolled && 'headerTransparent'}`}>
      <nav>
        <div className="logoContainer">
          <img src={isScrolled ? logoBlack : logoWhite} alt="myLogo" />
        </div>
        <div className="headerSections">
          <a href="#home">Home</a>
          <a href="#aboutMe">About me</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <a href="#" className="curriculum">
          Curriculum <HiDownload fill={isScrolled ? 'black' : 'white'} />
        </a>
      </nav>
    </header>
  );
};

export default navBar;

/*   return (
    <header className={`${!isScrolled && 'headerTransparent'}`}>
      <nav>
        <div className="logoContainer">
          <img src={isScrolled ? logoBlack : logoWhite} alt="myLogo" />
        </div>
        <div className="headerSections">
          <a href="#home">Home</a>
          <a href="#aboutMe">About me</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <a href="#" className="curriculum">
          Curriculum <HiDownload fill={isScrolled ? 'black' : 'white'} />
        </a>
      </nav>
    </header> */
