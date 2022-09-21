import styled from "styled-components";
import CONSTANTS from "../../utils/constants";

export const AboutContainer = styled.div`
  height: 100%;
  background: ${CONSTANTS.colors.offWhite};
`;

export const AboutWrapper = styled.div`
  display: flex;
  margin-left: 4rem;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  max-width: 600px;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    max-width: 320px;
  }
`;

export const AboutH2 = styled.h2`
  margin-top: 4rem;
  line-height: 3rem;
  font-weight: 400;
  font-size: 40px;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: "Cormorant Garamond";
`;

export const AboutP = styled.p`
  line-height: 1.6rem;
  margin-bottom: 3rem;
  text-align: justify;
  columns: 1;
  font-size: 16px;
  font-family: "Lato";
  justify-content: center;
  margin-top: 2rem;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: row;
  }
`;
