import React from "react";
import { BurgerContainer } from "./BurgerElements";
import { Squash as Hamburger } from "hamburger-react";

export default function Burger({ isOpen, toggle }) {
  return (
    // <BurgerContainer
    //   isOpen={isOpen}
    //   onClick={toggleSidebar}
    //   style={{ position: "absolute", top: "1.6rem", right: "30px" }}
    // >
    //   <div />
    //   <div />
    //   <div />
    // </BurgerContainer>
    // <BurgerContainer isOpen={isOpen}>
      <Hamburger toggled={isOpen} toggle={toggle} size={24} />
    // </BurgerContainer>
  );
}
