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
  height: 30vh;
  width: 100%;
  position: relative;
  object-fit: cover;
  margin-top: 0.5rem;
  padding: 1em;
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
  transition: 0.3s ease-in-out;

  @media screen and (max-width: 768px) {
    max-width: 80%;
  }
`;

export const PhilosophyH3 = styled.h3`
  display: flex;
  line-height: 3rem;
  font-family: "Lato";
  font-weight: bold;
  text-transform: uppercase;
  justify-content: center;
`;

export const PhilosophyP = styled.p`
  line-height: 1.6rem;
  margin: auto;
  text-align: justify;
  columns: 1;
  font-family: "Lato";
  margin-top: 1rem;
  margin-bottom: 3rem;
  max-width: 50%;
  color: ${CONSTANTS.colors.softBlack};
  transition: 0.3s ease-in-out;

  @media screen and (max-width: 768px) {
    max-width: 80%;
  }
`;
