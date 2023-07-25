import React from "react";
import {
  SidebarContainer,
  SidebarMenuUl,
  SidebarMenuLi,
  NavLinks,
} from "./SidebarElements";

export default function Dropdown({ isOpen, toggle }) {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <SidebarMenuUl>
        <SidebarMenuLi>
          <NavLinks to="/">Home</NavLinks>
          <NavLinks to="/company">Company</NavLinks>
          <NavLinks to="/services">Services</NavLinks>
          <NavLinks to="/gallery">Gallery</NavLinks>
          <NavLinks to="/contact">Contact</NavLinks>
        </SidebarMenuLi>
      </SidebarMenuUl>
    </SidebarContainer>
  );
}
