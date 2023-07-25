import styled from "styled-components";
import CONSTANTS from "../../utils/constants";
import { Link } from "react-router-dom";

// export const Nav = styled.nav`
//   height: 80px;
//   display: flex;
//   align-items: center;
//   font-size: 1.5rem;
//   background: ${CONSTANTS.colors.eggshellWhite};
//   top: 0;
//   position: sticky;
//   z-index: 10;

//   @media screen and (max-width: 960px) {
//     transition: 0.8s all ease;
//   }
// `;

// export const NavbarContainer = styled.div`
//   justify-content: space-between;
//   display: flex;
//   z-index: 1;
//   padding: 0 24px;
// `;

// export const NavMenu = styled.ul`
//   margin-right: 2rem;
//   display: flex;
//   align-items: center;
//   list-style: none;
//   text-align: center;
//   font-size: 15px;

//   @media screen and (max-width: 768px) {
//     display: none;
//   }
// `;

// export const NavItem = styled.li`
//   height: 80px;
//   margin-top: 10px;
// `;

// export const NavLinks = styled(LinkRoute)`
//   font-family: "Lato";
//   text-transform: uppercase;
//   color: black;
//   padding: 0 0.8rem;
//   height: 100%;
//   display: flex;
//   align-items: center;
//   position: relative;
//   text-decoration: none;

//   &::after {
//     content: "";
//     position: absolute;
//     width: 100%;
//     height: 2px;
//     bottom: 0;
//     left: 0;
//     background-color: #000;
//     transform-origin: bottom right;
//     transition: transform 0.3s ease-out;
//     transform: scaleX(0);
//     transform-origin: bottom left;
//   }

//   &:hover::after {
//     transform: scaleX(1);
//   }
// `;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  align-items: center;
  transition: 0.5s;
  font-size: 14px;
  top: 0;
  position: sticky;
  z-index: 999;
  background: ${CONSTANTS.colors.eggshellWhite};
`;

export const BurgerWrapper = styled.div`
  display: flex;
  margin-left: auto;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const LinksWrapper = styled.div`
  display: flex;
  gap: 1em;

  @media screen and (min-width: 768px) {
    margin-left: auto;
  }
`;

export const NavLink = styled(Link)`
  display: flex;
  font-family: "Lato";
  text-decoration: none;
  color: black;
  font-size: 1.1em;
  padding: 0.1em;
  text-decoration: none;
  text-transform: uppercase;
  background: linear-gradient(
    120deg,
    ${CONSTANTS.colors.silver},
    0%,
    ${CONSTANTS.colors.silver}
  );
  background-repeat: no-repeat;
  background-size: 100% 0.2em;
  background-position: 0 90%;
  transition: background-size 0.3s ease-in;

  &:hover {
    background-size: 100% 88%;
  }

  &:last-child {
    margin-right: 1em;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
