import styled from "styled-components";
import CONSTANTS from "../../utils/constants";

export const ValuesCardItemContainer = styled.div`
  gap: 2.5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin-bottom: 4rem;

  .listItem {
    opacity: 0;
    transform: scale(85%);
    transition: 1s;
  }

  .animate {
    opacity: 1;
    transition: 1s;
    transform: scale(100%);
  }
`;
