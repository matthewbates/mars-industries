import { useRef } from "react";

import { SidebarContainer, SideMenuItems } from "./SidebarElements";

import NavLinks from "../NavLinks";
import Socials from "../Socials";

import { links } from "../NavLinks/data";
import { useClickOutside } from "../../utils/helpers";

export default function Dropdown({ isOpen, setIsOpen, toggle }) {
  const sidebarRef = useRef(null);

  const closeDrawer = () => {
    setIsOpen(false);
  };

  useClickOutside(sidebarRef, () => {
    closeDrawer(setIsOpen);
  });

  return (
    <SidebarContainer ref={sidebarRef} isOpen={isOpen}>
      <SideMenuItems>
        {links.map(({ id, path, name }) => (
          <NavLinks key={id} path={path}>
            {name}
          </NavLinks>
        ))}
      </SideMenuItems>
    </SidebarContainer>
  );
}
