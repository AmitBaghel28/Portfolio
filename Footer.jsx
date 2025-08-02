// src/components/Footer.js
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #34495e;
  color: white;
  padding: 20px;
  text-align: center;
`;

const FooterText = styled.p`
  font-size: 1rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>© 2025 Amit Kumar Baghel | All Rights Reserved</FooterText>
    </FooterContainer>
  );
};

export default Footer;
