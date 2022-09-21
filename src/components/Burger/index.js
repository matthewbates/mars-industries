import React from "react";
import { BurgerContainer } from "./BurgerElements";

export default function Burger({ isOpen, toggleSidebar }) {
  return (
    <BurgerContainer
      isOpen={isOpen}
      onClick={toggleSidebar}
      style={{ position: "absolute", top: "1.6rem", right: "30px" }}
    >
      <div />
      <div />
      <div />
    </BurgerContainer>
  );
}
