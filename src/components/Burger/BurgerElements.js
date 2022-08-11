import styled from "styled-components";

export const BurgerContainer = styled.div`
  z-index: 2;
  width: 2rem;
  height: 2rem;
  /* THIS NEEDS TO BE FIXED FOR VIEWPORT CONDITIONAL - DISPLAY MENU >= 768px */
  display: none;
  flex-flow: column nowrap;
  justify-content: space-around;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    display: flex;
    color: #fff;
  }

  div {
    width: 2rem;
    height: 1.8px;
    background-color: black;
    transform-origin: 1px;
    /* transition: all 0.4s linear; */
    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      opacity: ${({ open }) => (open ? 0 : 1)};
      /* transition: ease-in-out 0.1s; */
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;
