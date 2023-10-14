import React from 'react';
import { FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const Footer = () => {
  return (
    <footer>
      <span>Designed & Developed Juan Manuel Gomez Omil</span>
      <div className="socials">
        <a href="https://wa.me/5493815751992" target="_blank">
          <FaWhatsapp size={30} />
        </a>
        <a href="https://www.linkedin.com/in/juan-manuel-gomez-omil-b8292a1ba/" target="_blank" >
          <FaLinkedin size={30} />
        </a>
        <a href="mailto: Juanmanuelgomezomil@gmail.com">
          <HiOutlineMail size={35} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
