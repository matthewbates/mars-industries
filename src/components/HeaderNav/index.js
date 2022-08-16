import React, { useState } from "react";
import { HeaderLinksContainer, HeaderNavMenu } from "./HeaderLinksElements";
import Burger from "../Burger";
import NavLinks from "../NavLinks";
import HeaderDropdown from "../HeaderDropdown";

export default function HeaderLinks() {
  const [open, setOpen] = useState(false);

  const handleOnClick = () => setOpen(!open);
  return (
    <HeaderLinksContainer>
      <HeaderNavMenu>
        <NavLinks title={"Home"} />
        <NavLinks title={"Projects"} />
        <NavLinks title={"Contact"} />
      </HeaderNavMenu>
      <Burger open={open} handleOnClick={handleOnClick} />
      <HeaderDropdown open={open} />
    </HeaderLinksContainer>
  );
}
