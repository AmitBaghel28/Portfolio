import React from 'react';
import styled from 'styled-components';

const ProjectsContainer = styled.div`
  padding: 80px 20px;
  background-color: #f4f6f9;
`;

const ProjectsTitle = styled.h2`
  text-align: center;
  font-size: 3rem;
  margin-bottom: 50px;
  color: #2c3e50;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
`;

const ProjectCard = styled.div`
  background-color: #ffffff;
  border-radius: 15px;
  padding: 25px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
  }
`;

const ProjectTitle = styled.h3`
  font-size: 2rem;
  color: #2980b9;
  margin-bottom: 15px;
`;

const ProjectDescription = styled.p`
  font-size: 1.15rem;
  color: #555;
  margin-bottom: 15px;
  line-height: 1.6;
`;

const ProjectTechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`;

const TechItem = styled.span`
  background-color: #2980b9;
  color: white;
  padding: 8px 18px;
  border-radius: 30px;
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
`;

const ProjectLinks = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 15px;
  flex-direction: column;
`;

const ProjectLink = styled.a`
  display: inline-block;
  color: #3498db;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.1rem;
  &:hover {
    text-decoration: underline;
  }
`;

const GitHubLink = styled.a`
  display: inline-block;
  color: #2c3e50;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.1rem;
  &:hover {
    text-decoration: underline;
  }
`;

const ProjectsSection = () => {
  return (
    <ProjectsContainer id="projects">
      <ProjectsTitle>My Projects</ProjectsTitle>
      <ProjectsGrid>
        <ProjectCard>
          <ProjectTitle>Weather App</ProjectTitle>
          <ProjectDescription>
            A React-based weather forecasting app that shows real-time weather conditions with smooth animations and a user-friendly interface.
          </ProjectDescription>
          <ProjectTechStack>
            <TechItem>React</TechItem>
            <TechItem>JavaScript</TechItem>
            <TechItem>CSS</TechItem>
            <TechItem>API Integration</TechItem>
          </ProjectTechStack>
          <ProjectLinks>
            <ProjectLink href="https://your-weather-app-link.com" target="_blank" rel="noopener noreferrer">
              View Project
            </ProjectLink>
            <GitHubLink href="https://github.com/your-username/weather-app" target="_blank" rel="noopener noreferrer">
              View on GitHub
            </GitHubLink>
          </ProjectLinks>
        </ProjectCard>

        <ProjectCard>
          <ProjectTitle>E-commerce Website</ProjectTitle>
          <ProjectDescription>
            A fully functional MERN stack e-commerce platform that includes user authentication, shopping cart management, and a dynamic product listing.
          </ProjectDescription>
          <ProjectTechStack>
            <TechItem>React</TechItem>
            <TechItem>Node.js</TechItem>
            <TechItem>Express</TechItem>
            <TechItem>MongoDB</TechItem>
            <TechItem>JWT</TechItem>
          </ProjectTechStack>
          <ProjectLinks>
            <ProjectLink href="https://your-ecommerce-link.com" target="_blank" rel="noopener noreferrer">
              View Project
            </ProjectLink>
            <GitHubLink href="https://github.com/your-username/ecommerce-website" target="_blank" rel="noopener noreferrer">
              View on GitHub
            </GitHubLink>
          </ProjectLinks>
        </ProjectCard>

        {/* Add more projects as needed */}
      </ProjectsGrid>
    </ProjectsContainer>
  );
};

export default ProjectsSection;
