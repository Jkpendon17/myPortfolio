import React from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'AwesomeTodos',
      description: 'A clean and intuitive todo application with task management features, built with React and Node.js.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
      githubLink: 'https://github.com/Jkpendon17/Assignment',
      demoLink: 'https://awesometodosbyjk17.netlify.app/',
      imageUrl: '/images/todo-app.jpg'
    },
    {
      id: 2,
      title: 'E-Commerce Platform',
      description: 'Full-featured online store with product listings, shopping cart, and checkout system.',
      technologies: ['React', 'Redux', 'Firebase', 'Stripe'],
      githubLink: '#',
      demoLink: '#',
      imageUrl: '/images/ecommerce.jpg'
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