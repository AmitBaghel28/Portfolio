import React from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';

// Navbar Container
const NavbarContainer = styled.nav`
  position: sticky;
  top: 0;
  background-color: #2c3e50;
  padding: 0;
  height: 60px;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Navbar List
const NavbarList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 40px;
  margin: 0;
  padding: 0;
`;

// Navbar Items
const NavbarItem = styled.li`
  font-size: 1.3rem;
  font-weight: 500;
`;

// Navbar Links
const NavbarLink = styled(Link)`
  color: white;
  text-decoration: none;
  position: relative;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #f39c12;
  }

  &::after {
    content: '';
    position: absolute;
    width: 0%;
    height: 2px;
    bottom: -5px;
    left: 0;
    background-color: #f39c12;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarList>
        <NavbarItem>
          <NavbarLink to="hero" smooth={true} duration={500}>Home</NavbarLink>
        </NavbarItem>
        <NavbarItem>
          <NavbarLink to="about" smooth={true} duration={500}>About</NavbarLink>
        </NavbarItem>
        <NavbarItem>
          <NavbarLink to="projects" smooth={true} duration={500}>Projects</NavbarLink>
        </NavbarItem>
        <NavbarItem>
          <NavbarLink to="contact" smooth={true} duration={500}>Contact</NavbarLink>
        </NavbarItem>
      </NavbarList>
    </NavbarContainer>
  );
};

export default Navbar;
