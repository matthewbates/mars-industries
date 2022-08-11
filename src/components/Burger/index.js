import React from "react";
import { BurgerContainer } from "./BurgerElements";

export default function Burger({ open, handleOnClick }) {
  return (
    <BurgerContainer
      open={open}
      onClick={handleOnClick}
      style={{ position: "fixed", top: "6rem", right: "25px" }}
    >
      <div />
      <div />
      <div />
    </BurgerContainer>
  );
}
