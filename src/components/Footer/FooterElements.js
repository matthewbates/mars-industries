import styled from "styled-components";
import CONSTANTS from "../../utils/constants";
import { Link as LinkRoute } from "react-router-dom";

export const Box = styled.div`
  padding: 20px;
  background: ${CONSTANTS.colors.eggshellWhite};
  border-top: 0.5px solid ${CONSTANTS.colors.lightGrey};

  @media (max-width: 768px) {
    /* padding: 30px 40px; */
    padding: 40px;
  }

  h1 {
    font-family: "Open Sans";
    color: ${CONSTANTS.colors.softBlack};
    position: relative;
    text-align: center;
    justify-content: center;
  }
`;

export const Container = styled.div`
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 80px;
  /* gap: 10px; */
  /* margin-bottom: 1rem; */

  @media screen and (max-width: 768px) {
    /* margin-left: 30px; */
    margin-left: 30px;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const NavLinks = styled(LinkRoute)`
  font-family: "Raleway";
  font-weight: 300;
  color: ${CONSTANTS.colors.softBlack};
  margin-bottom: 10px;
  /* gap: 2rem; */
  text-decoration: none;
  position: relative;
  text-transform: uppercase;
  font-size: 14px;

  &:hover {
    text-decoration: 1px solid underline;
  }
`;

export const Contact = styled.a`
  font-family: "Raleway";
  color: ${CONSTANTS.colors.softBlack};
  margin-bottom: 20px;
  text-decoration: none;
  line-height: 30px;
  font-weight: 300;
  font-size: 14px;

  &:hover {
    text-decoration: 1px solid underline;
  }
`;

export const ContactSpan = styled.span``;

export const Heading = styled.h3`
  margin-top: 2rem;
  margin-bottom: 1rem;
  font-family: "Raleway";
  font-weight: bold;
  text-transform: uppercase;
`;

export const CopyrightText = styled.p`
  font-size: 14px;
  color: ${CONSTANTS.colors.softBlack};
  text-align: center;
`;

export const TermsContainer = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1.5rem;
`;
