import React from 'react';
import styled from 'styled-components';

// Container for the About Section
const AboutContainer = styled.section`
  padding: 80px 20px;
  background-color: #f9f9f9;  // Light background color for a professional feel
  text-align: center;
  color: #333;  // Dark text for good readability
`;

// About Title Styling
const AboutTitle = styled.h2`
  font-size: 3rem;
  font-weight: 700;  // Bold title for emphasis
  margin-bottom: 30px;  // Added margin for spacing
  color: #2c3e50;  // Darker color for the heading
`;

// About Text Styling
const AboutText = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;  // Improved line spacing for readability
  max-width: 900px;
  margin: 0 auto 30px;  // Centered and bottom margin for spacing
  color: #7f8c8d;  // Lighter color for the body text
`;

// Social Links Styling (Optional)
const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
`;

// Social Link Button Styling
const SocialLink = styled.a`
  font-size: 1.2rem;
  color: #f39c12;
  text-decoration: none;
  font-weight: 600;
  text-transform: uppercase;
  transition: all 0.3s ease-in-out;
  
  &:hover {
    color: #e67e22;  // Hover color change for emphasis
    transform: translateY(-3px);  // Slight hover effect for interactivity
  }
`;

const AboutSection = () => {
  return (
    <AboutContainer id="about" data-aos="fade-up">
      <AboutTitle>About Me</AboutTitle>
      <AboutText>
        Hi, I'm Amit Kumar Baghel, a Full Stack Developer specializing in the MERN stack. I'm currently pursuing my B.Tech in Computer Science at GLA University, Mathura (graduating in May 2025). I'm actively seeking opportunities to apply my skills and grow in the tech industry.
        
        I’ve worked on projects like ShopCart, an e-commerce platform built with React.js, Node.js, Express, and MongoDB, and a Weather App using React.js. I also have hands-on experience in Java, JavaScript, MySQL, and problem-solving.
        
        I completed a Job Oriented Value Added Course at GLA University, gaining expertise in data structures, algorithms, and coding. I'm passionate about continuous learning and collaborating on tech projects.
        
        Feel free to connect with me on LinkedIn or email me at amit.baghel_cs21@gla.ac.in.
      </AboutText>

      <SocialLinks>
        <SocialLink href="https://www.linkedin.com/in/amitkumarbaghel" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </SocialLink>
       
      </SocialLinks>
    </AboutContainer>
  );
};

export default AboutSection;
