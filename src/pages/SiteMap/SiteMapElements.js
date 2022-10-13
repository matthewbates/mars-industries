import styled from "styled-components";
import CONSTANTS from "../../utils/constants";
import { Link } from "react-router-dom";

export const SiteMapContainer = styled(Link)`
  font-family: "Lato";
  font-size: 14px;
  text-decoration: none;
  color: ${CONSTANTS.colors.softBlack};

  &:hover {
    text-decoration: underline;
  }
`;
