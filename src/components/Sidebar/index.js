import React from "react";
import {
  SidebarContainer,
  SidebarMenuUl,
  SidebarMenuLi,
  Icon,
  CloseIcon,
  NavLinks,
} from "./SidebarElements";

export default function Dropdown({ isOpen, toggleSidebar }) {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggleSidebar}>
      <Icon>
        <CloseIcon />
      </Icon>
      <SidebarMenuUl>
        <SidebarMenuLi>
          <NavLinks to="/">Home</NavLinks>
          <NavLinks to="/services">Services</NavLinks>
          <NavLinks to="/gallery">Gallery</NavLinks>
          <NavLinks to="/contact">Contact</NavLinks>
        </SidebarMenuLi>
      </SidebarMenuUl>
    </SidebarContainer>
  );
}
