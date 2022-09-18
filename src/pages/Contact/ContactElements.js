import styled from "styled-components";
import CONSTANTS from "../../utils/constants";

export const ContactContainer = styled.div`
  /* alter this for smaller viewports */
  height: 80vh;
`;

export const ImgWrapper = styled.div`
  position: relative;
`;

export const ContactDiv = styled.div`
  background: ${CONSTANTS.colors.royalBlue};
  height: 30vh;
  width: 100%;
  position: relative;
`;

export const ImgH2 = styled.h2`
  text-align: center;
  align-items: center;
  font-family: "Lato";
  color: white;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`;

export const ContactH2 = styled.h2`
  margin-top: 5rem;
  text-align: center;
  justify-content: center;
  font-family: "Cormorant Garamond";
  font-weight: bold;
  font-size: 36px;
`;
