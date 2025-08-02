// src/components/ProjectCard.js
import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  width: 300px;
  margin: 20px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
  }
`;

const ProjectCardImage = styled.img`
  width: 100%;
  border-radius: 10px;
  object-fit: cover;
`;

const ProjectTitle = styled.h3`
  margin: 15px 0;
  font-size: 1.5rem;
  color: #333;
`;

const ProjectDescription = styled.p`
  color: #666;
  font-size: 1rem;
  line-height: 1.5;
`;

const Button = styled.a`
  display: inline-block;
  background-color: #f39c12;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  margin-top: 10px;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #e67e22;
  }
`;

const ProjectCard = ({ title, description, liveLink, githubLink, imgUrl }) => {
  return (
    <CardContainer>
      <ProjectCardImage src={imgUrl} alt={title} />
      <ProjectTitle>{title}</ProjectTitle>
      <ProjectDescription>{description}</ProjectDescription>
      <Button href={liveLink} target="_blank" rel="noopener noreferrer">Live Demo</Button>
      <Button href={githubLink} target="_blank" rel="noopener noreferrer" style={{ marginTop: '10px' }}>View on GitHub</Button>
    </CardContainer>
  );
};

export default ProjectCard;
