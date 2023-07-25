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
  max-width: 50%;
  transition: 0.3s ease-in-out;
  align-items: center;
  justify-content: center;
  padding-top: 2rem;
  padding-bottom: 2rem;

  @media screen and (max-width: 768px) {
    max-width: 80%;
  }
`;

export const AboutH2 = styled.div`
  line-height: 3rem;
  font-weight: 400;
  font-size: 2em;
  font-weight: bold;
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
  font-size: 1.2em;
  font-family: "Lato";
  justify-content: center;
  color: ${CONSTANTS.colors.softBlack};

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: row;
  }
`;
