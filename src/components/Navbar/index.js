import React from "react";
import { NavbarContainer, LinkBtn } from "./NavbarElements";
import { Link } from "react-router-dom";
import Burger from "../Burger";

export default function Navbar() {
  return (
    <NavbarContainer>
      <LinkBtn to="/services">Services</LinkBtn>
      <LinkBtn to="/contact">Contact</LinkBtn>
      <Burger />
    </NavbarContainer>
  );
}
