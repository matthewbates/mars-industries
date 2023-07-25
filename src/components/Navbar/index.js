import { useState, useEffect } from "react";
import {
  Nav,
  NavbarContainer,
  NavMenu,
  NavItem,
  NavLinks,
  BurgerWrapper,
  LinksWrapper,
  NavLink,
} from "./NavbarElements";
import Burger from "../Burger";
import Sidebar from "../Sidebar";
import gsap from "gsap";
import { navLinks } from "./data";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const onResize = (e) => {
    if (e.currentTarget.innerWidth > 768) {
      setIsOpen(false);
    }
  };

  const handleOnScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 70) ||
        currentScrollPos < 10
    );
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleOnScroll);
    return window.removeEventListener("scroll", handleOnScroll);
  }, [prevScrollPos, visible, handleOnScroll]);

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
    <NavbarContainer>
      <BurgerWrapper>
        <Burger isOpen={isOpen} toggle={toggleSidebar} />
      </BurgerWrapper>
      <LinksWrapper>
        {navLinks.map((link, index) => (
          <NavLink to={link.to}>{link.title}</NavLink>
        ))}
      </LinksWrapper>
      <Sidebar isOpen={isOpen} toggle={toggleSidebar} />
    </NavbarContainer>
    // <Nav>
    //   <NavbarContainer>
    //     <NavMenu>
    //       {navLinks.map((item, index) => (
    //         <NavItem key={index}>
    //           <NavLinks className="nav-links" to={item.to}>
    //             {item.title}
    //           </NavLinks>
    //         </NavItem>
    //       ))}
    //     </NavMenu>
    //     <Burger isOpen={isOpen} toggleSidebar={toggleSidebar} />
    //     <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
    //   </NavbarContainer>
    // </Nav>
  );
}
