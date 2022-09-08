import React from "react";
import { DropdownContainer } from "./DropdownElements";

export default function Dropdown({ isOpen, toggleDropdown }) {
  return (
    <DropdownContainer
      isOpen={isOpen}
      onClick={toggleDropdown}
    ></DropdownContainer>
  );
}
