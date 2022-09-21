import styled from "styled-components";
import CONSTANTS from "../../utils/constants";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

export const SidebarContainer = styled.div`
  position: fixed;
  z-index: 999;
  width: 65%;
  height: 100%;
  background: ${CONSTANTS.colors.dropdown};
  /* display: grid;
  align-items: center; */
  top: 0;
  /* left: 0; */
  right: 0;
  transition: 0.3s ease-out;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  /* top: ${({ isOpen }) => (isOpen ? "0" : "-100%")}; */
  right: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

// export const DropdownMenu = styled.div`
//   display: grid;
//   justify-content: center;
//   text-align: center;
//   gap: 1.5rem;
//   align-items: center;
// `;

export const SidebarMenuUl = styled.ul`
  display: block;
  position: relative;
  padding: 0.9em 40px;
  margin: 0;
  margin-block-start: 2.5em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 25px;
`;

export const SidebarMenuLi = styled.li`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  font-size: 14px;
`;

export const NavLinks = styled(Link)`
  letter-spacing: 4px;
  font-family: "Lato";
  text-decoration: none;
  color: ${CONSTANTS.colors.lightGrey};

  &:hover {
    color: ${CONSTANTS.colors.eggshellWhite};
  }
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.5rem;
  left: 1.3rem;
`;

export const CloseIcon = styled(FaTimes)`
  color: ${CONSTANTS.colors.lightGrey};
  cursor: pointer;
`;
