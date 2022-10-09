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
import gsap from "gsap";
import { navLinks } from "./data";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const onResize = (e) => {
    if (e.currentTarget.innerWidth > 768) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  });

  useEffect(() => {
    gsap.from(".nav-links", {
      x: -180,
      delay: 1.5,
      opacity: 0,
      duration: 0.8,
      stagger: 0.3,
    });
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Nav>
      <NavbarContainer>
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
