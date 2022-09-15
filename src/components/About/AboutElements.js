import styled from "styled-components";
import CONSTANTS from "../../utils/constants";

export const AboutContainer = styled.div`
  background: ${CONSTANTS.colors.offWhite};
`;

export const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  max-width: 520px;

  @media screen and (max-width: 768px) {
    max-width: 420px;
  }
`;

export const AboutH1 = styled.h1`
  margin-top: 4rem;
  align-items: center;
  line-height: 2.5rem;
  justify-content: center;
  text-align: center;
  font-family: "Lato";
`;

export const AboutP = styled.p`
  text-align: left;
  columns: 1;
  font-size: 16px;
  font-family: "Lato";
  justify-content: center;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: row;
  }
`;
