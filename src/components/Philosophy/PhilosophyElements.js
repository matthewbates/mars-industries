import styled from "styled-components";
import CONSTANTS from "../../utils/constants";

export const PhilosophyContainer = styled.div`
  height: 100%;
  background: ${CONSTANTS.colors.offWhite};
  /* margin-top: 0.5rem; */
`;

export const PhilosophyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PhilosophyImg = styled.img`
  height: 40vh;
  width: 100%;
  position: relative;
  object-fit: cover;
  margin-top: 0.5rem;
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
    max-width: 320px;
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
  margin-top: 1rem;
  margin-bottom: 3rem;
  max-width: 550px;
  color: ${CONSTANTS.colors.softBlack};

  @media screen and (max-width: 768px) {
    max-width: 300px;
  }
`;
