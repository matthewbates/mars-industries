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

export const ContactImg = styled.img`
  background: blue;
  height: 20vh;
  width: 100%;
  object-fit: cover;
`;

export const ImgH3 = styled.h3`
  text-align: center;
  font-family: "Poppins";
  color: white;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

export const ContactH2 = styled.h2`
  margin-top: 5rem;
  text-align: center;
  justify-content: center;
  font-family: "Open Sans";
  font-weight: bold;
  font-size: 36px;
`;
