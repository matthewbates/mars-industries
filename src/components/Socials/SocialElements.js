import styled from "styled-components";
import CONSTANTS from "../../utils/constants";

export const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.6rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  cursor: pointer;
`;

export const SocialIconLink = styled.a`
  color: ${CONSTANTS.colors.lightGrey};

  &:hover {
    color: black;
  }
`;
