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
    font-family: "Poppins";
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
  margin-left: 50px;

  @media screen and (max-width: 768px) {
    margin-left: 30px;
    margin-top: 3rem;
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
  font-family: "Poppins";
  color: ${CONSTANTS.colors.softBlack};
  margin-bottom: 12px;
  font-size: 16px;
  text-decoration: none;
  position: relative;

  &:hover {
    text-decoration: underline;
  }
`;

export const Contact = styled.a`
  font-family: "Poppins";
  color: ${CONSTANTS.colors.softBlack};
  margin-bottom: 20px;
  font-size: 16px;
  text-decoration: none;
  line-height: 30px;

  &:hover {
    text-decoration: underline;
  }
`;

export const ContactSpan = styled.span``;

export const Heading = styled.p`
  font-family: "Poppins";
  font-size: 24px;
  color: ${CONSTANTS.colors.softBlack};
  margin-bottom: 40px;
  font-weight: bold;
`;

export const CopyrightText = styled.p`
  font-size: 14px;
  color: ${CONSTANTS.colors.softBlack};
  text-align: center;
`;
