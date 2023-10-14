import React, { useEffect, useState } from 'react';
import { FaUser, FaCode, FaLaptopCode } from 'react-icons/fa';
import { BiCodeCurly, BiCode } from 'react-icons/bi';
import { HiCode, HiMail } from 'react-icons/hi';
const Marker = () => {
  const [scroll, setScroll] = useState(null);

  const windowHeight = window.innerHeight;

  const handleScroll = (value) => {
    window.scrollTo({
      top: value,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', () => setScroll(window.scrollY));
    return () => {
      window.removeEventListener('scroll', () => setScroll(window.scrollY));
    };
  }, []);

  return (
    <div className="markerContainer">
      <div className="mark" onClick={() => handleScroll(windowHeight + 1)}>
        <FaUser />
        <div className={`line ${scroll > windowHeight && scroll < windowHeight * 2 && 'markedLine'}`} />
      </div>
      <div className="mark" onClick={() => handleScroll(windowHeight * 2 + 1)}>
        <HiCode />
        <div className={`line ${scroll > windowHeight * 2 && scroll < windowHeight * 3 && 'markedLine'}`} />
      </div>
      <div className="mark" onClick={() => handleScroll(windowHeight * 3 + 1)}>
        <FaLaptopCode />
        <div className={`line ${scroll > windowHeight * 3 && scroll < windowHeight * 4 - 1 && 'markedLine'}`} />
      </div>
      <div className="mark" onClick={() => handleScroll(windowHeight * 4 + 1)}>
        <HiMail />
        <div className={`line ${scroll >= windowHeight * 4 && 'markedLine'}`} />
      </div>
    </div>
  );
};

export default Marker;
