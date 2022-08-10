import styled from "styled-components";

export const BurgerContainer = styled.div`
  z-index: 2;
  width: 2rem;
  height: 2rem;
  display: none;
  flex-flow: column nowrap;
  justify-content: space-around;
  cursor: pointer;

  /* 768px would be for iPad air */
  @media screen and (max-width: 820px) {
    display: flex;
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
    color: #fff;
  }

  div {
    width: 1.5rem;
    height: 3px;
    background-color: ${({ open }) => (open ? "white" : "black")};
    border-radius: 20px;
    transform-origin: 1px;
    transition: all 0.4s linear;
  }
`;
