import styled from "styled-components";
import CONSTANTS from "../../utils/constants";

export const HeaderTitleContainer = styled.div`
  background: ${CONSTANTS.colors.offWhite};
  height: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* figure out a way to get the spacing as close as possible ⬇️*/
  line-height: .00000000000001em;

  @media screen and (max-width: 768px) {
    height: 10vh;
  }
`;

export const HeaderTitleH1 = styled.h1`
  font-family: "Poppins";

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`;

export const HeaderTitleH2 = styled.p`
  color: black;
  font-family: "Poppins";
`;
