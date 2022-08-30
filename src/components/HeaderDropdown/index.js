import React from "react";
import { DropdownContainer } from "./HeaderDropdownElements";
import { Link } from "react-router-dom";
import NavLinks from "../NavLinks";

export default function HeaderDropdown({ open, title }) {
  return (
    <DropdownContainer open={open}>
      <NavLinks title={"Home"} />
      <NavLinks title={"Projects"} />
      {/* <NavLinks title={"Contact"} /> */}
      <Link to="/contact">Contact</Link>
    </DropdownContainer>
  );
}
