import React from 'react';
import SectionTitle from '../components/SectionTitle';
import knowledgeData from '../data/knowledge.json';
import interestedData from '../data/interested.json';

const Skills = () => {
  return (
    <>
      <section className="skillsContainer" id="skills">
        <SectionTitle text={'SKILLS'} />
        <div className="knowledge">
          <h2>Knowledge</h2>
          <div className="logosContainer">
            {knowledgeData.map((data, index) => (
              <div className="skillsCard" key={index}>
                <img src={data.icon} alt={data.name} />
                <p>{data.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
