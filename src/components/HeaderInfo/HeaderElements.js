import styled from "styled-components";
import CONSTANTS from "../../utils/constants";

export const HeaderContainer = styled.div`
  text-align: center;
  background-color: ${CONSTANTS.colors.offWhite};
  height: 80px;
  border-bottom: 1px solid black;

  @media screen and (max-width: 768px) {
    text-align: left;
  }
`;

export const HeaderLogo = styled.img`
  margin-top: 1rem;
  width: 50px;
  height: 50px;
`;

export const HeaderContact = styled.div`
  text-align: right;
  margin-right: 2rem;
  margin-top: -3rem;

  @media screen and (max-width: 768px) {
    margin-right: 2rem;
    text-align: right;
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
