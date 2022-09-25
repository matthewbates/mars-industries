import styled from "styled-components";
import CONSTANTS from "../../utils/constants";

export const ServicesContainer = styled.div`
  background: ${CONSTANTS.colors.offWhite};
`;

export const ServicesH3 = styled.h3`
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

export const ServicesSubText = styled.h3`
  margin-top: 1rem;
  text-align: center;
  font-family: "Lato";
  /* color: ${CONSTANTS.colors.softBlack}; */
`;

export const ValuesH1 = styled.h1`
  font-family: "Lato";
  margin-top: 4rem;
  text-align: center;
  font-weight: bold;
`;
