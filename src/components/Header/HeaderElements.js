import styled from "styled-components";
import CONSTANTS from "../../utils/constants";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  height: 80px;
  border-bottom: 2px solid ${CONSTANTS.colors.silver};
  background: ${CONSTANTS.colors.royalBlue};

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
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
    color: ${CONSTANTS.colors.softBlack};

    &:hover {
      color: ${CONSTANTS.colors.facebookBlue};
      transition: 200ms ease-in;
    }
  }

  &:nth-child(2) {
    color: ${CONSTANTS.colors.softBlack};

    &:hover {
      color: ${CONSTANTS.colors.safetyGreen};
      transition: 200ms ease-in;
    }
  }
`;

export const HeaderLogo = styled.img`
  margin-left: 20px;
  width: 60px;
  height: 60px;
`;

export const HeaderTitle = styled.h1``;

export const HeaderContact = styled.div`
  margin-right: 20px;
  gap: 1.5rem;
`;

export const HeaderLi = styled.li`
  list-style: none;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const HeaderA = styled.a`
  font-family: "Poppins";
  color: white;
  font-size: 14px;
  flex-direction: column;
  text-decoration: none;

  @media screen and (max-width: 768px) {
    font-size: 12px;
  }

  &:hover {
    color: ${CONSTANTS.colors.safetyGreen};
    transition: 200ms ease-in;
  }
`;
