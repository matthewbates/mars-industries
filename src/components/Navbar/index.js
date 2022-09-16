import React, { useState } from "react";
import {
  Nav,
  NavbarContainer,
  NavMenu,
  NavItem,
  NavLinks,
} from "./NavbarElements";
import Burger from "../Burger";
import Dropdown from "../Dropdown";

export default function Navbar({}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Nav>
      <NavbarContainer>
        <NavMenu>
          <NavItem>
            <NavLinks to="/">Home</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/services">Services</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/contact">Contact</NavLinks>
          </NavItem>
        </NavMenu>
        <Burger isOpen={isOpen} toggleDropdown={toggleDropdown} />
        <Dropdown isOpen={isOpen} toggleDropdown={toggleDropdown} />
      </NavbarContainer>
    </Nav>
  );
}
