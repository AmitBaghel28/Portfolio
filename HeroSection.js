import React from 'react';
import styled from 'styled-components';
import AmitPhoto from '../assets/amitp5.jpeg'; // Import image from assets folder

// Hero Container
const HeroContainer = styled.section`
  position: relative;
  width: 100%;
  height: 100vh; // Full screen
  background-image: url('https://images.pexels.com/photos/30382341/pexels-photo-30382341/free-photo-of-canvas-tote-bag-with-books-and-dried-flowers.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load');  // Correct direct image URL
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  overflow: hidden;
`;

// Dark Overlay for Text Contrast
const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5); // Darker overlay for better text visibility
`;

// Content Section for Text and Button
const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 800px;  // Increased width for better text placement
  padding: 20px;
  text-align: center;
  margin-top: 100px; // Adjusted for proper spacing from the image
`;

// Hero Title (Main Heading)
const HeroTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 20px;
  letter-spacing: 1.5px;  // Improved readability with spacing
  @media (max-width: 768px) {
    font-size: 2rem;  // Responsive font size for smaller screens
  }
`;

// Hero Text (Subheading/Description)
const HeroText = styled.p`
  font-size: 1.25rem;
  font-weight: 300;
  margin-bottom: 30px;
  line-height: 1.6;  // Improved line spacing for readability
  @media (max-width: 768px) {
    font-size: 1rem;  // Adjusted text size for smaller screens
  }
`;

// Button Styling
const HeroButton = styled.a`
  padding: 12px 30px;
  font-size: 1.2rem;
  background-color: #f39c12;
  color: white;
  border-radius: 5px;
  text-decoration: none;
  font-weight: 600;
  text-transform: uppercase;  // Added capitalized text for emphasis
  letter-spacing: 1px;  // Slight spacing for modern look
  @media (max-width: 768px) {
    font-size: 1rem;  // Adjusted font size for smaller screens
  }

  &:hover {
    background-color: #e67e22;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);  // Hover effect with shadow for emphasis
  }
`;

// Profile Image Styling (Centered & Circular)
const HeroImage = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 50%;  // Circular image
  border: 5px solid white;  // Border around image
  position: absolute;
  top: 20%;  // Positioned towards the top
  transform: translate(-50%, -50%);
  left: 50%;
  z-index: 2;
  object-fit: cover;  // Ensures the image fits well within the circle
  object-position: center;  // Ensures the face remains visible and centered
  @media (max-width: 768px) {
    width: 150px;
    height: 150px;  // Adjusted size for smaller screens
  }
`;

// Hero Section Component
const HeroSection = () => {
  return (
    <section id="hero">
      <HeroContainer>
        <Overlay />
        <HeroImage src={AmitPhoto} alt="Amit Kumar Baghel" />
        <HeroContent>
          <HeroTitle>Hi, I'm Amit Kumar Baghel</HeroTitle>
          <HeroText>I'm a Full Stack Developer specializing in the MERN stack, passionate about building web applications and continuously learning new technologies.</HeroText>
          <HeroButton href="#contact">Contact Me</HeroButton>
        </HeroContent>
      </HeroContainer>
    </section>
  );
};

export default HeroSection;
