import styled from "styled-components";
import CONSTANTS from "../../utils/constants";

export const BurgerContainer = styled.div`
  display: none;
  flex-flow: column nowrap;
  justify-content: space-around;
  z-index: 10;
  width: 2rem;
  height: 2rem;
  /* border: ${({ isOpen }) => (isOpen ? "1px solid black" : null)}; */
  /* THIS NEEDS TO BE FIXED FOR VIEWPORT CONDITIONAL - DISPLAY MENU >= 768px */
  cursor: pointer;

  @media screen and (max-width: 768px) {
    display: flex;
    color: black;
  }

  div {
    width: 2rem;
    height: 2px;
    background-color: black;
    transform-origin: 1px;
    transition: all 0.4s linear;
    &:nth-child(1) {
      transform: ${({ isOpen }) => (isOpen ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      opacity: ${({ isOpen }) => (isOpen ? 0 : 1)};
      transition: ease-in-out 0.1s;
    }
    &:nth-child(3) {
      transform: ${({ isOpen }) => (isOpen ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;
