import styled from "styled-components";
import CONSTANTS from "../../utils/constants";
import { Link } from "react-router-dom";

export const SiteMapContainer = styled.div`
  background: ${CONSTANTS.colors.eggshellWhite};
`;

export const SiteMapWrapper = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const SiteLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
