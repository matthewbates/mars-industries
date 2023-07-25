import styled from "styled-components";
import CONSTANTS from "../../utils/constants";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  background: ${CONSTANTS.colors.eggshellWhite};
  z-index: 999;
  border-bottom: 0.5px solid ${CONSTANTS.colors.lightGrey};

  @media screen and (max-width: 768px) {
    justify-content: center;
    display: flex;
    flex-direction: column;
  }
`;

export const SocialsWrapper = styled.div`
  margin-left: 3rem;
  transition: 0.3s ease-in-out;

  @media screen and (max-width: 768px) {
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const HeaderLogo = styled.img`
  width: 70px;
  height: 70px;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const HeaderTitle = styled.h1``;

export const HeaderContact = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-right: 3rem;

  @media screen and (max-width: 768px) {
    margin-right: 0px;
  }
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
  color: ${CONSTANTS.colors.lightGrey};
  font-size: 14px;
  flex-direction: column;
  text-decoration: none;
  transition: 0.3s ease-in-out;

  @media screen and (max-width: 768px) {
    font-size: 12px;
  }

  &:hover {
    font-weight: bold;
    color: ${CONSTANTS.colors.softBlack};
  }
`;
