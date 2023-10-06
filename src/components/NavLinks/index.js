import React from "react";
import { NavLink } from "./NavLinkElements";

import { closeDrawer } from "../../utils/helpers";

export default function NavLinks({ path, name, setIsOpen, children }) {
  return (
    <NavLink onClick={() => closeDrawer(setIsOpen)} to={path} name={name}>
      {children}
    </NavLink>
  );
}
