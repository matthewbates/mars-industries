import styled from "styled-components";
import CONSTANTS from "../../utils/constants";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  background: ${CONSTANTS.colors.eggshellWhite};
  z-index: 999;

  @media screen and (max-width: 768px) {
    justify-content: center;
    display: flex;
    flex-direction: column;
  }
`;

export const SocialsWrapper = styled.div`
  margin-left: 20px;

  @media screen and (max-width: 768px) {
    /* margin-top: 1rem; */
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
  text-align: left;

  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

export const HeaderA = styled.a`
  font-family: "Poppins";
  color: black;
  font-size: 16px;
  flex-direction: column;
  text-decoration: none;

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }

  &:hover {
    color: ${CONSTANTS.colors.safetyGreen};
    transition: 200ms ease-in;
  }
`;
