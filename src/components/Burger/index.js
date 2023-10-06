import React from "react";
import { Squash as Hamburger } from "hamburger-react";

export default function Burger({ isOpen, toggle }) {
  return (
    <Hamburger color="#000000" toggled={isOpen} toggle={toggle} size={24} />
  );
}
