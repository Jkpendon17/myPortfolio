import React from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css';
import Awesome from "../assets/images/awesometodos.png"
import Anisave from "../assets/images/anisave.png"

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'AwesomeTodos',
      description: 'A clean and intuitive todo application with task management features, built with React and Node.js.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB','Netlify'],
      githubLink: 'https://github.com/Jkpendon17/Assignment',
      demoLink: 'https://awesometodosbyjk17.netlify.app/',
      imageUrl: Awesome
    },
    {
      id: 2,
      title: 'Anisave',
      description: 'A webpage application for customers that wants to buy and sell a product. It has a easy features to navigate and management',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
      githubLink: 'https://github.com/Janriisasi/anisave',
      demoLink: '#',
      imageUrl: Anisave
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">Here are some of my recent works</p>
        <div className="projects-grid">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;