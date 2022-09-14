import styled from "styled-components";
import CONSTANTS from "../utils/constants";

export const Button = styled.button`
  border-radius: 4px;
  background: ${({ primary }) =>
    primary ? `${CONSTANTS.colors.limeGreen}` : "#010606"};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : " 16px")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) =>
      primary ? `${CONSTANTS.colors.safetyGreen}` : "black"};
    color: ${{}};
  }
`;
