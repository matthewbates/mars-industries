import styled from "styled-components";
import CONSTANTS from "../../utils/constants";

export const HeaderContainer = styled.div`
  display: flex;
  background-color: ${CONSTANTS.colors.offWhite};
  height: 80px;
  border-bottom: 1px solid black;
`;

export const HeaderLogo = styled.img`
  display: flex;
  margin-top: 1rem;
  margin-left: 1rem;
  width: 50px;
  height: 50px;
`;

export const HeaderContact = styled.div`
  margin-top: 1rem;
  margin-left: 6rem;
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
