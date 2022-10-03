import styled from "styled-components";
import CONSTANTS from "../utils/constants";

export const Button = styled.button`
  border-radius: 6px;
  border: 1px solid ${CONSTANTS.colors.lightGrey};
  background: ${({ primary }) =>
    primary ? `${CONSTANTS.colors.royalBlue}` : "#010606"};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : " 16px")};
  outline: none;
  /* border: none; */
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  margin-top: 1rem;
  font-family: "Lato";
  color: ${CONSTANTS.colors.offWhite};

  &:hover {
    transition: all 0.2s ease-in-out;
    /* filter: brightness(80%); */
    /* background: ${CONSTANTS.colors.royalBlue}; */
    background: transparent;
    border: 1px solid ${CONSTANTS.colors.lightGrey};
    color: ${CONSTANTS.colors.softBlack};
    /* color: ${CONSTANTS.colors.eggshellWhite}; */
  }
`;
