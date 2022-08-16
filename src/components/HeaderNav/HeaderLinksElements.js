import styled from "styled-components";
import CONSTANTS from "../../utils/constants";

export const HeaderLinksContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 50px;
  background-color: ${CONSTANTS.colors.offWhite};
  cursor: pointer;
`;

export const HeaderNavMenu = styled.ul`
  position: absolute;
  display: flex;
  margin-top: 8px;
  cursor: pointer;

  &:hover {
    border-bottom: 3px solid black;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
