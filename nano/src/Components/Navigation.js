import React from "react";
import styled from "styled-components";
import MainContent from "./MainContent";
// Define your sexy font
import { useLocation } from "react-router-dom";
const sexyFont = "Playfair Display, serif";

const NavbarWrapper = styled.nav`
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  position: sticky;
  top: 0px;
  z-index: 2;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  margin: 0 35px;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: #fff;
  font-family: ${sexyFont};
  font-size: 18px;
  transition: color 0.3s;

  &:hover {
    color: #ff69b4;
  }
`;

const Navbar = () => {
  return (
    <NavbarWrapper>
      <NavList>
        <NavItem>
          <NavLink href="/">HOME</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/people">PEOPLE</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/research">RESEARCH</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/meal">REACT-MEAL</NavLink>
        </NavItem>
        {/* <NavItem>
          <NavLink href="#">FACILITIES</NavLink>
        </NavItem> */}

        {/* <NavItem>
          <NavLink href="#">PUBLICATIONS</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">GALLERY</NavLink>
        </NavItem> */}
      </NavList>
    </NavbarWrapper>
  );
};

export default Navbar;
