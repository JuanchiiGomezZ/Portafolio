import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { FaShare, FaGithub } from 'react-icons/fa';
import projects from '../data/projects.json';
import projectsEs from '../data/projectsEs.json';
import { useTranslation } from 'react-i18next';

const Projects = () => {
  const { t } = useTranslation();
  const language = localStorage.getItem('language') || 'en';
  let projectsData = language == 'es' ? projectsEs : projects;

  return (
    <section id="projects">
      <SectionTitle text={t('header.projects')} />
      <div className="cards">
        {projectsData.map((item, index) => (
          <div className="cardContainer" key={index}>
            <img className="projectImg" src={item.image} alt="flex movies" />
            <div className="content">
              <div className="head">
                <span className={item.finished ? 'status-finished' : 'status-notFinished'}>
                  {item.finished ? t('projects.finished') : t('projects.notFinished')}
                </span>
                <span className="title">{item.title}</span>
              </div>
              <div className="techs">
                {item.techs.map((item, index) => (
                  <img src={item} alt="techs" key={index} />
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
