import React from "react";
import { BurgerContainer } from "./BurgerElements";

export default function Burger() {
  return (
    <BurgerContainer style={{ position: "fixed", top: "6rem", right: "10px" }}>
      <div />
      <div />
      <div />
    </BurgerContainer>
  );
}
