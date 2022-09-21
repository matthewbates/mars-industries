import styled from "styled-components";
import CONSTANTS from "../../utils/constants";

export const ArrowsContainer = styled.div``;

export const ArrowsPrev = styled.span`
  color: ${CONSTANTS.colors.offWhite};
  cursor: pointer;
  position: absolute;
  top: 50%;
  padding: 1rem;
  margin-top: -3rem;
  font-size: 30px;
  font-weight: bold;

  &:hover {
    background: rgba(0, 0, 0, 0.2);
  }
`;

export const ArrowsNext = styled.span`
  color: ${CONSTANTS.colors.offWhite};
  cursor: pointer;
  position: absolute;
  top: 50%;
  padding: 1rem;
  margin-top: -3rem;
  font-size: 30px;
  font-weight: bold;
  right: 0;

  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
`;
