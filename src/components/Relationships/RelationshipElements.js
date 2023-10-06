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
  max-width: 50%;
  transition: 0.3s ease-in-out;
  padding-top: 2rem;
  padding-bottom: 2rem;

  @media screen and (max-width: 768px) {
    max-width: 80%;
  }
`;

export const RelationshipsH2 = styled.div`
  font-weight: 400;
  font-size: 2em;
  font-weight: bold;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: "Cormorant Garamond";
`;

export const RelationshipsP = styled.p`
  line-height: 1.6rem;
  margin-bottom: 2rem;
  text-align: justify;
  font-family: "Lato";
  justify-content: center;
  margin-top: 2rem;
  color: ${CONSTANTS.colors.softBlack};
  font-size: 1.2em;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: row;
  }
`;
