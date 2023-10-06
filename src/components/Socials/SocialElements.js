import styled from "styled-components";
import CONSTANTS from "../../utils/constants";

export const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.6rem;
  cursor: pointer;
`;

export const SocialIconLink = styled.a`
  color: ${CONSTANTS.colors.lightGrey};

  &:hover {
    color: ${CONSTANTS.colors.softBlack};
    transition: 200ms ease-in;
  }
`;
