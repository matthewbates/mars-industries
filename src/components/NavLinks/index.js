import React from "react";
import { NavLinksContainer, NavLinkScroll } from "./NavLinkElements";

export default function NavLinks({ title }) {
  return (
    <NavLinksContainer>
      <NavLinkScroll
        to={title}
        spy={true}
        offset={0}
        smooth={true}
        duration={700}
      />
      {title}
    </NavLinksContainer>
  );
}
