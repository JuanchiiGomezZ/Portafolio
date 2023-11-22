import React, { useEffect, useState } from 'react';
import logoWhite from '../assets/logo-white.png';
import logoBlack from '../assets/logo-Black.png';

import { HiDownload } from 'react-icons/hi';
import i18next from '../services/i18n';
import { useTranslation } from 'react-i18next';
import languages from '../locales/languages.json';

const navBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useTranslation();

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

  const handleChangeLanguage = (lng) => {
    localStorage.setItem('language', lng);
    i18next.changeLanguage(lng);
  };

  const language = localStorage.getItem('language');
  return (
    <>
      <header className={`${!isScrolled && 'headerTransparent'}`}>
        <nav>
          <div className="logoContainer">
            <img src={isScrolled ? logoBlack : logoWhite} alt="myLogo" />
          </div>
          <div className="headerSections">
            <a href="#home">{t('header.home')}</a>
            <a href="#aboutMe">{t('header.aboutMe')}</a>
            <a href="#skills">{t('header.skills')}</a>
            <a href="#projects">{t('header.projects')}</a>
            <a href="#contact">{t('header.contact')}</a>
          </div>
          <div className="headerActions">
            <div className="menuLanguages">
              {languages.map((item, index) => (
                <img
                  src={item.icon}
                  className={language == item.abbreviation && 'activeFlag'}
                  key={item.abbreviation}
                  onClick={() => {
                    handleChangeLanguage(item.abbreviation);
                  }}
                />
              ))}
            </div>
            <a href={t('resume')} target="_blank" className="curriculum">
              {t('header.resume')} <HiDownload fill={isScrolled ? 'black' : 'white'} />
            </a>
          </div>
        </nav>
      </header>
    </>
  );
};

export default navBar;
// https://drive.google.com/file/d/1MqOlL4TAT1V6wYzw9sMZXS-LpVHDDYvt/view?usp=sharing
