import styled from "styled-components";
import CONSTANTS from "../../utils/constants";

export const AuthorContainer = styled.div`
  a {
    font-family: "Lato";
    font-size: 14px;
    color: ${CONSTANTS.colors.softBlack};
    text-decoration: none;
  }

  &:hover {
    text-decoration: underline;
    transition: 200ms ease-in;
  }
`;
