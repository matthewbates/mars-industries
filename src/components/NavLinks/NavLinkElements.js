import styled from "styled-components";
import { Link } from "react-scroll";

export const NavLinksContainer = styled.li`
  text-align: center;
  list-style: none;
  cursor: pointer;
  color: black;
  font-size: 24px;
`;

export const NavLinkScroll = styled(Link)`
  /* &:hover {
    border-bottom: 1px solid black;
  } */
`;
