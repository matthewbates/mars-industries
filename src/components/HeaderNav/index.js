import React, { useState } from "react";
import { HeaderLinksContainer, HeaderNavMenu } from "./HeaderLinksElements";
import { Link } from "react-router-dom";
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
        {/* <NavLinks title={"Contact"} /> */}
        <Link to="/contact">Contact</Link>
      </HeaderNavMenu>
      <Burger open={open} handleOnClick={handleOnClick} />
      <HeaderDropdown open={open} />
    </HeaderLinksContainer>
  );
}
