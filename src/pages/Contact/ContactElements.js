import styled from "styled-components";
import CONSTANTS from "../../utils/constants";

export const ContactContainer = styled.div`
  height: 80vh;
`;

export const ImgWrapper = styled.div`
  position: relative;
`;

export const ContactImg = styled.img`
  height: 30vh;
  width: 100%;
  position: relative;
  object-fit: cover;
  filter: brightness(40%);
`;

export const ContactH2 = styled.h2`
  text-align: justify;
  align-items: center;
  font-family: "Cormorant Garamond";
  color: white;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;

export const ContactH1 = styled.h1`
  margin-top: 5rem;
  text-align: center;
  justify-content: center;
  font-family: "Lato";
  font-weight: bold;
  font-size: 38px;
`;
