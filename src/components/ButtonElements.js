import styled from "styled-components";
import CONSTANTS from "../utils/constants";

export const Button = styled.button`
  border-radius: 6px;
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
  margin-top: 1rem;
  font-family: "Lato";

  &:hover {
    transition: all 0.2s ease-in-out;
    filter: brightness(80%);
    color: ${({ primary }) => (primary ? "#fff" : "black")};
  }
`;
