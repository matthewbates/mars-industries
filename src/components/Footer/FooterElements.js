import styled from "styled-components";
import CONSTANTS from "../../utils/constants";
import { Link as LinkRoute } from "react-router-dom";

export const Box = styled.div`
  padding: 20px;
  background: ${CONSTANTS.colors.softBlack};

  @media (max-width: 768px) {
    /* padding: 30px 40px; */
    padding: 40px;
  }

  h1 {
    /* font-family: "Poppins"; */
    color: ${CONSTANTS.colors.offWhite};
    /* this was added to justify content center for contact route */
    position: relative;
    text-align: center;
    justify-content: center;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  margin-left: 60px;
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
  color: ${CONSTANTS.colors.offWhite};
  margin-bottom: 20px;
  font-size: 16px;
  text-decoration: none;
  /* line-height: 35px; */

  &:hover {
    color: ${CONSTANTS.colors.safetyGreen};
    transition: 200ms ease-in;
  }
`;

export const Contact = styled.a`
  font-family: "Poppins";
  color: ${CONSTANTS.colors.offWhite};
  margin-bottom: 20px;
  font-size: 16px;
  text-decoration: none;
  line-height: 35px;

  &:hover {
    color: ${CONSTANTS.colors.safetyGreen};
    transition: 200ms ease-in;
  }
`;

export const ContactSpan = styled.span`
  /* margin-top: 10px; */
`;

export const Heading = styled.p`
  font-size: 24px;
  color: ${CONSTANTS.colors.offWhite};
  margin-bottom: 40px;
  font-weight: bold;
`;

export const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  font-size: 2rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  cursor: pointer;
`;

export const SocialIconLink = styled.a`
  &:nth-child(1) {
    color: ${CONSTANTS.colors.silver};

    &:hover {
      color: ${CONSTANTS.colors.safetyGreen};
      transition: 200ms ease-in;
    }
  }

  &:nth-child(2) {
    color: ${CONSTANTS.colors.silver};

    &:hover {
      color: ${CONSTANTS.colors.safetyGreen};
      transition: 200ms ease-in;
    }
  }
`;

export const CopyrightText = styled.p`
  font-size: 14px;
  color: ${CONSTANTS.colors.offWhite};
  text-align: center;
`;
