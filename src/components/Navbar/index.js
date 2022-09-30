import React, { useState, useEffect } from "react";
import {
  Nav,
  NavbarContainer,
  NavMenu,
  NavItem,
  NavLinks,
} from "./NavbarElements";
import Burger from "../Burger";
import Sidebar from "../Sidebar";
import Logo from "../Logo";
import gsap from "gsap";
import { navLinks } from "./data";

export default function Navbar({}) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    gsap.from(".nav-links", {
      x: -180,
      delay: 0.5,
      opacity: 0,
      duration: 1.2,
      stagger: 0.3,
    });
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Nav>
      <NavbarContainer>
        {/* <Logo /> */}
        <NavMenu>
          {navLinks.map((item, index) => (
            <NavItem key={index}>
              <NavLinks className="nav-links" to={item.to}>
                {item.title}
              </NavLinks>
            </NavItem>
          ))}
        </NavMenu>
        <Burger isOpen={isOpen} toggleSidebar={toggleSidebar} />
        <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      </NavbarContainer>
    </Nav>
  );
}
