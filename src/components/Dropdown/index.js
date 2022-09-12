import React from "react";
import {
  DropdownContainer,
  DropdownMenu,
  Icon,
  CloseIcon,
  NavLinks,
} from "./DropdownElements";

export default function Dropdown({ isOpen, toggleDropdown }) {
  return (
    <DropdownContainer isOpen={isOpen} onClick={toggleDropdown}>
      <Icon>
        <CloseIcon />
      </Icon>
      <DropdownMenu>
        <NavLinks to="/">Home</NavLinks>
        <NavLinks to="/services">Services</NavLinks>
        <NavLinks to="/contact">Contact</NavLinks>
      </DropdownMenu>
    </DropdownContainer>
  );
}
