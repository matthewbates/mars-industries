import styled from "styled-components";
import CONSTANTS from "../../utils/constants";
import { Link } from "react-router-dom";
import { FaTimesCircle } from "react-icons/fa";

export const DropdownContainer = styled.div`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 30%;
  background: black;
  display: grid;
  align-items: center;
  top: 0;
  /* left: 0; */
  transition: 0.5s ease-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

export const DropdownMenu = styled.div`
  display: grid;
  justify-content: center;
  text-align: center;
  gap: 1rem;
  align-items: center;
`;

export const NavLinks = styled(Link)`
  font-family: "Poppins";
  text-decoration: none;
  color: white;

  &:hover {
    color: ${CONSTANTS.colors.safetyGreen};
    transition: 200ms ease-in;
  }
`;

export const Icon = styled.div`
  position: absolute;
  top: 1rem;
  right: 1.3rem;
`

export const CloseIcon = styled(FaTimesCircle)`
  color: #fff;
  cursor: pointer;
`;
