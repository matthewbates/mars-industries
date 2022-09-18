import styled from "styled-components";
import CONSTANTS from "../../utils/constants";
import { Link } from "react-router-dom";
import { FaTimesCircle } from "react-icons/fa";

export const DropdownContainer = styled.div`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 40%;
  background: ${CONSTANTS.colors.dropdown};
  display: grid;
  align-items: center;
  top: 0;
  transition: 0.5s ease-out;
  /*  was 100% : 0 */
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
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
  font-size: 16px;
  letter-spacing: 4px;
  font-family: "Lato";
  text-decoration: none;
  color: ${CONSTANTS.colors.lightGrey};

  &:hover {
    color: ${CONSTANTS.colors.eggshellWhite};
    transition: 200ms ease-in;
  }
`;

export const Icon = styled.div`
  position: absolute;
  top: 1rem;
  right: 1.3rem;
`;

export const CloseIcon = styled(FaTimesCircle)`
  color: #fff;
  cursor: pointer;
`;
