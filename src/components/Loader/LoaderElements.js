import styled from "styled-components";
import CONSTANTS from "../../utils/constants";

export const LoaderContainer = styled.div`
  .loading-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    color: ${CONSTANTS.colors.offWhite};
    background: ${CONSTANTS.colors.softBlack};
  }
  .loading-number {
    width: 50px;
    margin: 12px;
  }
`;
