import React from "react";
import {
  Nav,
  NavbarContainer,
  NavMenu,
  NavItem,
  NavLinks,
} from "./NavbarElements";
import { Link } from "react-router-dom";
import Burger from "../Burger";
import Dropdown from "../Dropdown";

export default function Navbar({ isOpen, toggleDropdown }) {
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
      </NavbarContainer>
    </Nav>
  );
}
