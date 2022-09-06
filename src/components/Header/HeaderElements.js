import styled from "styled-components";
import CONSTANTS from "../../utils/constants";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  border-bottom: 2px solid black;
  background: ${CONSTANTS.colors.offWhite};

  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

export const HeaderLogo = styled.img`
  margin-left: 20px;
  width: 60px;
  height: 60px;
`;

export const HeaderTitle = styled.h1`
  /* text-align: left; */
`;

export const HeaderContact = styled.div`
  margin-right: 20px;
`;

export const HeaderLi = styled.li`
  list-style: none;
`;

export const HeaderA = styled.a`
  flex-direction: column;
  text-decoration: none;
  color: black;
  /* margin-left: 5px; */
`;
