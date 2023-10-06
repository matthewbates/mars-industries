import styled from "styled-components";
import CONSTANTS from "../../utils/constants";
import { Link } from "react-router-dom";

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
  margin-right: auto;
  margin-left: 0.5em;

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
