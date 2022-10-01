import styled from "styled-components";
import CONSTANTS from "../../utils/constants";

export const PhilosophyContainer = styled.div`
  height: 100%;
  background: ${CONSTANTS.colors.offWhite};
`;

export const PhilosophyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* margin-left: auto; */
  /* margin-right: auto; */
  align-items: center;
  /* justify-content: center; */
`;

export const PhilosophyImg = styled.img`
  height: 40vh;
  width: 100%;
  position: relative;
  object-fit: cover;
`;

export const PhilosophyIntro = styled.h3`
  line-height: 2rem;
  max-width: 720px;
  text-align: justify;
  columns: 1;
  font-family: "Lato";
  justify-content: center;
  margin-top: 4rem;
  margin-bottom: 4rem;

  @media screen and (max-width: 768px) {
    max-width: 420px;
  }
`;

export const PhilosophyH3 = styled.h3`
  line-height: 3rem;
  font-family: "Lato";
  font-weight: bold;
  text-transform: uppercase;
`;

export const PhilosophyP = styled.p`
  line-height: 1.6rem;
  text-align: justify;
  columns: 1;
  font-family: "Lato";
  margin-top: 2rem;
  margin-bottom: 3rem;
  max-width: 550px;

  @media screen and (max-width: 768px) {
    max-width: 320px;
  }
`;
