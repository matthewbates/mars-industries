import React, { useState } from "react";
import { HeaderLinksContainer } from "./HeaderLinksElements";
import Burger from "../Burger";
import HeaderNavLinks from "../NavLinks";
import HeaderDropdown from "../HeaderDropdown";

export default function HeaderLinks() {
  const [open, setOpen] = useState(false);

  const handleOnClick = () => setOpen(!open);
  return (
    <HeaderLinksContainer>
      <Burger open={open} handleOnClick={handleOnClick} />
      <HeaderDropdown open={open} />
    </HeaderLinksContainer>
  );
}
