import styled from "styled-components";
import CONSTANTS from "../../utils/constants";

export const HeaderContainer = styled.div`
  text-align: center;
  background: ${CONSTANTS.colors.offWhite};
  height: 80px;
  border-bottom: 2px solid black;

  @media screen and (max-width: 768px) {
    text-align: left;
  }
`;

export const HeaderLogo = styled.img`
  margin-left: 1.5rem;
  margin-top: 0.5rem;
  width: 60px;
  height: 60px;
  cursor: pointer;
`;

export const HeaderTitle = styled.h1`
  text-align: left;
`;

export const HeaderContact = styled.div`
  text-align: right;
  margin-right: 2rem;
  margin-top: -3.5rem;

  @media screen and (max-width: 768px) {
    font-size: 16px;
    line-height: 24px;

  }
`;

export const HeaderLi = styled.li`
  list-style: none;
`;

export const HeaderA = styled.a`
  flex-direction: column;
  text-decoration: none;
  color: black;
  margin-left: 5px;
`;
