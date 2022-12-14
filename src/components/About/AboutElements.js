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
  max-width: 560px;
  align-items: center;
  justify-content: center;
  /* margin-top: 4rem;
  margin-bottom: 4rem; */
  padding-top: 2rem;
  padding-bottom: 2rem;

  @media screen and (max-width: 768px) {
    max-width: 320px;
  }
`;

export const AboutH2 = styled.h2`
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
  margin-top: 2rem;
  margin-bottom: 2rem;
  text-align: justify;
  columns: 1;
  font-size: 16px;
  font-family: "Lato";
  justify-content: center;
  color: ${CONSTANTS.colors.softBlack};

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: row;
  }
`;
