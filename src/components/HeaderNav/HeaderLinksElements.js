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
  display: flex;
  /* THIS NEEDS TO BE FIXED TO CENTER IN THE MIDDLE ⬇️ */
  position: relative;
  margin-top: 8px;

  /* position: absolute;
  margin-top: 8px; */
  cursor: pointer;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
