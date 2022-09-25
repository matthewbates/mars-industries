import styled from "styled-components";
import CONSTANTS from "../../utils/constants";

export const ExperienceContainer = styled.div`
  height: 100%;
  background: ${CONSTANTS.colors.offWhite};
`;

export const ExperienceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  max-width: 560px;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    max-width: 320px;
  }
`;

export const ExperienceH2 = styled.h3`
  margin-top: 2rem;
  line-height: 3rem;
  font-weight: 400;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: "Lato";
  font-weight: 300;
  text-transform: uppercase;
`;

export const ExperienceP = styled.p``;
