import React from 'react';
import ProjectCard from './ProjectCard';


const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-commerce Site',
      description: 'Online store with shopping cart',
      technologies: ['React', 'Node.js'],
      githubLink: '#',
      demoLink: '#'
    },
    {
      id: 2,
      title: 'Task Manager',
      description: 'Productivity app for daily tasks',
      technologies: ['React', 'Firebase'],
      githubLink: '#',
      demoLink: '#'
    }
  ];

  return (
    <section id="projects" className="section">
      <h2>My Projects</h2>
      <div className="projects-container">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;