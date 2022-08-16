import styled from "styled-components";
import CONSTANTS from "../../utils/constants";

export const HeaderLinksContainer = styled.div`
  display: flex;
  height: 50px;
  background-color: ${CONSTANTS.colors.offWhite};
`;

export const HeaderNavMenu = styled.ul`
  display: flex;
  align-items: center;
  text-align: center;
  list-style: none;
`;
