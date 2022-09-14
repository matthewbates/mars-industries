import styled from "styled-components";
import CONSTANTS from "../../utils/constants";

export const ServiceCardItemContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 720px;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 768px) {
    margin: 3rem;
    /* padding: 40px; */
  }
`;
