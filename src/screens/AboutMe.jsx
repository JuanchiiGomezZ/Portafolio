import React from 'react';
import SectionTitle from '../components/SectionTitle';
import face from '../assets/face.jpg';
const AboutMe = () => {
  return (
    <section className="aboutMe" id="aboutMe">
      <SectionTitle text={'ABOUT ME'} />
      <div className="box">
        <img src={face} alt="myPhoto" />
        <p>
          I'm Juan Manuel, a Frontend developer from Argentina. I'm passionate about creating beautiful and functional websites, blending
          imagination with creativity to deliver exceptional user experiences. My portfolio showcases projects that reflect my professional
          approach and collaborative skills in multidisciplinary teams. I'm always eager to learn and stay updated with the latest design
          and web development trends. Excited to continue crafting impactful digital experiences and exploring new professional
          opportunities. Thanks for visiting my profile! make a site as beautiful and attractive as possible.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
