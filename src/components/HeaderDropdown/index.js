import React from "react";
import { DropdownContainer } from "./HeaderDropdownElements";
import NavLinks from "../NavLinks";

export default function HeaderDropdown({ open, title }) {
  return (
    <DropdownContainer open={open}>
      <NavLinks title={"Home"} />
      <NavLinks title={"Projects"} />
      <NavLinks title={"Contact"} />
    </DropdownContainer>
  );
}
