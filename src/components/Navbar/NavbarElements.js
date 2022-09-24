import styled from "styled-components";
import CONSTANTS from "../../utils/constants";
import { Link as LinkRoute } from "react-router-dom";

export const Nav = styled.nav`
  height: 80px;
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  background: ${CONSTANTS.colors.eggshellWhite};
  top: 0;
  position: sticky;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  justify-content: space-between;
  display: flex;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
`;

export const NavbarH2 = styled.h2`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  font-family: "Cormorant Garamond";

  @media screen and (max-width: 768px) {
    display: none;
    font-size: 36px;
  }
`;

export const NavMenu = styled.ul`
  /* margin-right: 2rem; */
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  font-size: 14px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkRoute)`
  font-family: "Lato";
  text-transform: uppercase;
  color: black;
  padding: 0 1rem;
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;
  text-decoration: none;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #000;
    transform-origin: bottom right;
    transition: transform 0.3s ease-out;
    transform: scaleX(0);
    transform-origin: bottom left;
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;
