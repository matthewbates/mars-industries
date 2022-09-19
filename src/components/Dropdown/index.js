import React from "react";
import Socials from "../Socials";
import {
  DropdownContainer,
  DropdownMenuUl,
  DropdownMenuLi,
  Icon,
  CloseIcon,
  NavLinks,
  DropdownSocialsWrapper
} from "./DropdownElements";

export default function Dropdown({ isOpen, toggleDropdown }) {
  return (
    <DropdownContainer isOpen={isOpen} onClick={toggleDropdown}>
      <Icon>
        <CloseIcon />
      </Icon>
      <DropdownMenuUl>
        <DropdownMenuLi style={{ borderBotom: "1px solid white" }}>
          <NavLinks to="/">Home</NavLinks>
          <NavLinks to="/services">Services</NavLinks>
          <NavLinks to="/gallery">Gallery</NavLinks>
          <NavLinks to="/contact">Contact</NavLinks>
        </DropdownMenuLi>
      </DropdownMenuUl>
      <DropdownSocialsWrapper>
        <Socials />
      </DropdownSocialsWrapper>
    </DropdownContainer>
  );
}
