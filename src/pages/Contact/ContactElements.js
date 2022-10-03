import styled from "styled-components";
import CONSTANTS from "../../utils/constants";

export const ContactContainer = styled.div`
  height: 100%;
`;

export const ImgWrapper = styled.div`
  position: relative;
  margin-top: 0.5rem;
`;

export const ContactImg = styled.img`
  height: 40vh;
  width: 100%;
  position: relative;
  object-fit: cover;
  filter: brightness(40%);
`;

export const ContactH3 = styled.h3`
  margin-top: 0.5rem;
  line-height: 3rem;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: "Lato";
  font-weight: 300;
  text-transform: uppercase;
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

export const ContactH5 = styled.h5`
  display: flex;
  /* margin-top: 2rem; */
  line-height: 3rem;
  font-weight: 400;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: "Lato";
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 1.5px;
`;

export const ContactSubtitle = styled.h2`
  margin-top: 2rem;
  text-align: center;
  justify-content: center;
  font-family: "Poppins";
  font-weight: 500;
`;
