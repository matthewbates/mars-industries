import styled from "styled-components";
import CONSTANTS from "../../utils/constants";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  border-bottom: 2px solid ${CONSTANTS.colors.silver};
  background: ${CONSTANTS.colors.royalBlue};

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
  font-family: "Poppins";
  color: white;
  font-size: 14px;
  flex-direction: column;
  text-decoration: none;

  &:hover {
    color: ${CONSTANTS.colors.safetyGreen};
    transition: 200ms ease-in;
  }
`;
