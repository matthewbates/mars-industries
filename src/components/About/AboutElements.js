import styled from "styled-components";
import CONSTANTS from "../../utils/constants";

export const AboutContainer = styled.div`
  height: 100%;
  background: ${CONSTANTS.colors.offWhite};
  .listItem {
    display: flex;
    align-items: center;
    flex-direction: row;
    margin: 40px 0px 40px;
    justify-content: center;
    /* Pre-animation */
    opacity: 0;
    transform: scale(85%);
    transition: 1s;
    @media (max-width: 900px) {
      flex-direction: column;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: left;
    }
  }
  .animate {
    opacity: 1;
    transition: 1s;
    transform: scale(100%);
  }
`;

export const AboutWrapper = styled.div`
  display: flex;
  margin-left: 4rem;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  max-width: 560px;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    max-width: 360px;
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
  margin-bottom: 2rem;
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
