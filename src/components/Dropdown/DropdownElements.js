import styled from "styled-components";
import CONSTANTS from "../../utils/constants";

export const DropdownContainer = styled.div`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 30%;
  background: ${CONSTANTS.colors.softBlack};
  display: grid;
  align-items: center;
  top: 0;
  /* left: 0; */
  transition: 0.5s ease-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;
