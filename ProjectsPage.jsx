// src/pages/ProjectsPage.js
import React from 'react';
import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    title: 'E-commerce Website',
    description: 'A full-fledged e-commerce website built with React, Node, and MongoDB.',
    liveLink: 'https://your-live-project-link.com',
    githubLink: 'https://github.com/your-github-repo',
    imgUrl: 'https://example.com/project-image.jpg',
  },
  {
    title: 'Weather App',
    description: 'A weather app that shows real-time weather information.',
    liveLink: 'https://your-live-weather-app.com',
    githubLink: 'https://github.com/your-weather-app-repo',
    imgUrl: 'https://example.com/weather-app-image.jpg',
  },
];

const ProjectsPage = () => {
  return (
    <div id="projects" style={{ padding: '50px', backgroundColor: '#f4f4f4' }}>
      <h2>My Projects</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            liveLink={project.liveLink}
            githubLink={project.githubLink}
            imgUrl={project.imgUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
