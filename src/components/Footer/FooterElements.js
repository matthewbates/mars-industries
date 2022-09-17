import styled from "styled-components";
import CONSTANTS from "../../utils/constants";
import { Link as LinkRoute } from "react-router-dom";

export const Box = styled.div`
  padding: 20px;
  background: ${CONSTANTS.colors.offWhite};
  border-top: 1px solid black;

  @media (max-width: 768px) {
    /* padding: 30px 40px; */
    padding: 40px;
  }

  h1 {
    font-family: "Lato";
    color: ${CONSTANTS.colors.softBlack};
    position: relative;
    text-align: center;
    justify-content: center;
  }
`;

export const Container = styled.div`
  /* this was added for laptop size */
  margin-top: 2rem;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  margin-left: 60px;

  /* THIS WAS ADDED WHILE WORKING ON LAPTOP */
  @media screen and (max-width: 768px) {
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
  font-family: "Lato";
  color: ${CONSTANTS.colors.softBlack};
  margin-bottom: 20px;
  font-size: 16px;
  text-decoration: none;
  /* line-height: 35px; */

  &:hover {
    text-decoration: underline;
    transition: 200ms ease-in;
  }
`;

export const Contact = styled.a`
  font-family: "Lato";
  color: ${CONSTANTS.colors.softBlack};
  margin-bottom: 20px;
  font-size: 16px;
  text-decoration: none;
  line-height: 35px;

  &:hover {
    text-decoration: underline;
    transition: 200ms ease-in;
  }
`;

export const ContactSpan = styled.span`
  /* margin-top: 10px; */
`;

export const Heading = styled.p`
  font-family: "Lato";
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
