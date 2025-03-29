import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="tech-tags">
        {project.technologies.map((tech, index) => (
          <span key={index}>{tech}</span>
        ))}
      </div>
      <div className="project-links">
        <a href={project.githubLink}>Code</a>
        <a href={project.demoLink}>Demo</a>
      </div>
    </div>
  );
};

export default ProjectCard;