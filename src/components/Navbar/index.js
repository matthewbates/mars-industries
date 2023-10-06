import { useState, useEffect, useRef } from "react";

import gsap from "gsap";

import {
  NavbarContainer,
  BurgerWrapper,
  LinksWrapper,
  NavLink,
} from "./NavbarElements";

import Burger from "../Burger";
import Sidebar from "../Sidebar";
import { navLinks } from "./data";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const linkRef = useRef(null);

  const onResize = (e) => {
    if (e.currentTarget.innerWidth > 768) {
      setIsOpen(false);
    }
  };

  const animateSidebar = (isOpen, linkRef) => {
    if (isOpen && linkRef.current) {
      console.log(linkRef.current);
      gsap.from(linkRef.current.children, {
        y: 50,
        opacity: 0,
        duration: 0.3,
        stagger: 0.2,
        delay: 0.3,
      });
    }
  };

  useEffect(() => {
    animateSidebar(isOpen, linkRef);
  }, [isOpen]);

  const handleOnScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 70) ||
        currentScrollPos < 10
    );
    setPrevScrollPos(currentScrollPos);
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavbarContainer>
      <BurgerWrapper>
        <Burger isOpen={isOpen} toggle={toggleSidebar} />
      </BurgerWrapper>
      <LinksWrapper ref={linkRef}>
        {navLinks.map((link, index) => (
          <NavLink  key={index} to={link.to}>
            {link.title}
          </NavLink>
        ))}
      </LinksWrapper>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} toggle={toggleSidebar} />
    </NavbarContainer>
  );
}
