import styled from "styled-components";
import CONSTANTS from "../../utils/constants";

export const RelationshipsContainer = styled.div`
  background: ${CONSTANTS.colors.offWhite};
`;

export const RelationshipsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 520px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 768px) {
    max-width: 620px;
    margin-left: 1.5rem;
    margin-right: 1.5rem;
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
  text-align: left;
  columns: 1;
  font-size: 16px;
  font-family: "Lato";
  justify-content: center;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: row;
  }
`;
