import styled from "styled-components";
import CONSTANTS from "../../utils/constants";

export const AboutContainer = styled.div`
  height: 100%;
  background: ${CONSTANTS.colors.offWhite};
`;

export const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  max-width: 520px;

  @media screen and (max-width: 768px) {
    max-width: 450px;
  }
`;

export const AboutH1 = styled.h1`
  margin-top: 3rem;
  line-height: 3rem;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: "Lato";
`;

export const AboutP = styled.p`
  line-height: 1.8rem;
  margin-bottom: 3rem;
  text-align: justify;
  columns: 1;
  font-size: 16px;
  font-family: "Lato";
  justify-content: center;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: row;
  }
`;
