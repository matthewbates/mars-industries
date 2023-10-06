import styled from "styled-components";
import CONSTANTS from "../../utils/constants";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

export const SidebarContainer = styled.div`
  position: fixed;
  z-index: 994;
  width: 60%;
  height: 100%;
  background: ${CONSTANTS.colors.dropdown};
  top: 80px;
  right: 0;
  transition: 0.4s ease-out;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  left: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

export const SideMenuItems = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
  gap: 1rem;
  font-size: 16px;
  font-family: "Arial";
  width: 100%;
  margin: 1em;
`;
