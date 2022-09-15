import React from "react";
import { BurgerContainer } from "./BurgerElements";

export default function Burger({ isOpen, toggleDropdown }) {
  return (
    <BurgerContainer
      isOpen={isOpen}
      onClick={toggleDropdown}
      style={{ position: "absolute", top: "1.4rem", right: "15px" }}
    >
      <div />
      <div />
      <div />
    </BurgerContainer>
  );
}
