import styled from "styled-components";
import CONSTANTS from "../../utils/constants";
import { Link } from "react-router-dom";

export const SiteMapRoutesContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  color: ${CONSTANTS.colors.softBlack};
  text-decoration: none;
`;
