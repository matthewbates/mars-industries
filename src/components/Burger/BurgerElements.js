import styled from "styled-components";
import CONSTANTS from "../../utils/constants";

export const BurgerContainer = styled.div`
  z-index: 995;
  color: white;
  color: ${({ isOpen }) => (isOpen ? "white" : "black")};
`;
