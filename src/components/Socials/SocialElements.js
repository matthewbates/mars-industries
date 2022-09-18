import styled from "styled-components";
import CONSTANTS from "../../utils/constants";

export const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
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
      transition: 200ms ease-in;
      color: ${CONSTANTS.colors.facebookBlue};
    }
  }

  &:nth-child(2) {
    color: ${CONSTANTS.colors.softBlack};
  }
`;
