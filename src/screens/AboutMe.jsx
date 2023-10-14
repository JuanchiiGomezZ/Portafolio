import React from 'react';
import SectionTitle from '../components/SectionTitle';
import face from '../assets/face.jpg';
import { useTranslation } from 'react-i18next';
const AboutMe = () => {
  const { t } = useTranslation();

  return (
    <section className="aboutMe" id="aboutMe">
      <SectionTitle text={t('header.aboutMe')} />
      <div className="box">
        <img src={face} alt="myPhoto" />
        <p>{t('aboutMe.text')}</p>
      </div>
    </section>
  );
};

export default AboutMe;
