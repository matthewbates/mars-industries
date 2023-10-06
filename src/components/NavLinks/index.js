import React from "react";
import { NavLink } from "./NavLinkElements";

export default function NavLinks({ path, name, children }) {
  return (
    <NavLink to={path} name={name}>
      {children}
    </NavLink>
  );
}
