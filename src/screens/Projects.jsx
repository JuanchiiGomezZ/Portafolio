import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { FaShare, FaGithub } from 'react-icons/fa';
import projects from '../data/projects.json';

const Projects = () => {
  return (
    <section id="projects">
      <SectionTitle text={'Projects'} />
      <div className="cards">
        {projects.map((item, index) => (
          <div className="cardContainer">
            <img className="projectImg" src={item.image} alt="flex movies" />
            <div className="content">
              <div className="head">
                <span className={item.finished ? 'status-finished' : 'status-notFinished'}>
                  {item.finished ? 'Finished' : 'Currently Working on'}
                </span>
                <span className="title">{item.title}</span>
              </div>
              <div className="techs">
                {item.techs.map((item) => (
                  <img src={item} alt="techs" />
                ))}
              </div>
              <p className="description">{item.description}</p>
              <div className="buttons">
                {item.live && (
                  <a className="actionBtn" target="_blank" href={item.live}>
                    <FaShare />
                    <span>Live</span>
                  </a>
                )}

                {item.repo && (
                  <div className="actionBtn" target="_blank" href={item.repo}>
                    <FaGithub />
                    <span>Code</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
