import styled from "styled-components";
import CONSTANTS from "../../utils/constants";

export const DropdownContainer = styled.div`
  width: 100vw;
  height: 150px;
  padding-top: 3.5rem;
  overflow: visible;
  flex-flow: column nowrap;
  position: relative;
  overflow: hidden;
  transition: transform 0.4s ease-in-out;
  background: ${CONSTANTS.colors.offWhite};
  opacity: ${({ open }) => (open ? 1 : 0)};
`;
