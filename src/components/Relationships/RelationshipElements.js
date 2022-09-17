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
  max-width: 620px;

  @media screen and (max-width: 768px) {
    max-width: 450px;
  }
`;

export const RelationshipsH2 = styled.h2`
  margin-top: 4rem;
  align-items: center;
  line-height: 2.5rem;
  justify-content: center;
  text-align: center;
  font-family: "Lato";
`;

export const RelationshipsP = styled.p`
  line-height: 1.6rem;
  margin-bottom: 3rem;
  text-align: justify;
  columns: 1;
  font-size: 16px;
  font-family: "Lato";
  justify-content: center;
  margin-top: 1rem;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: row;
  }
`;
