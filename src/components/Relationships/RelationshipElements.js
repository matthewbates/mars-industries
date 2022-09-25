import styled from "styled-components";
import CONSTANTS from "../../utils/constants";

export const RelationshipsContainer = styled.div`
  background: ${CONSTANTS.colors.offWhite};
`;

export const RelationshipsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  max-width: 560px;
  margin-top: 4rem;
  margin-bottom: 4rem;

  @media screen and (max-width: 768px) {
    max-width: 360px;
  }
`;

export const RelationshipsH2 = styled.h2`
  font-weight: 400;
  font-size: 40px;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: "Cormorant Garamond";
`;

export const RelationshipsP = styled.p`
  line-height: 1.6rem;
  margin-bottom: 2rem;
  text-align: justify;
  columns: 1;
  /* font-size: 18px; */
  font-family: "Lato";
  justify-content: center;
  margin-top: 2rem;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: row;
  }
`;
