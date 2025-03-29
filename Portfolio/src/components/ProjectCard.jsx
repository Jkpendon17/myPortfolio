import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div className="project-image-container">
        <img 
          src={project.imageUrl || '/default-project.jpg'} 
          alt={project.title}
          className="project-image"
        />
      </div>
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="tech-tags">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
        <div className="project-links">
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
            <i className="fas fa-code"></i> Code
          </a>
          <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="project-link">
            <i className="fas fa-external-link-alt"></i> Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;