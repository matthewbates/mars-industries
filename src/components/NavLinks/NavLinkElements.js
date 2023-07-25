import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";

export const NavLinksContainer = styled.li`
  padding: 3px;
  margin-left: 1rem;
  text-align: center;
  list-style: none;
  color: black;
  font-size: 24px;

  &:hover {
    color: gold;
  }
`;

export const NavLinkScroll = styled(LinkS)`
  /* &:hover {
    border-bottom: 1px solid black;
  } */
`;

export const NavLinkRoute = styled(LinkR)`
  text-decoration: none;
`;
