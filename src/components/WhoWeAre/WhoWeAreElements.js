import styled from "styled-components";
import CONSTANTS from "../../utils/constants";

export const WhoWeAreContainer = styled.div`
  position: relative;
  text-align: center;
  justify-content: center;
  height: 100%;
  color: white;
`;

export const WhoWeAreWrapper = styled.div`
  position: absolute;
  /* max-width: 560px; */
  top: 50%;
  left: 50%;
  text-align: justify;
  line-height: 1.5rem;
  font-weight: bold;
  transform: translate(-50%, -50%);

  @media screen and (max-width: 768px) {
    font-size: 12px;
    line-height: 1.2rem;
    max-width: 320px;
  }
`;

export const WhoWeAreImg = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: cover;
  filter: brightness(20%);
`;

export const WhoWeAreP = styled.p`
  line-height: 1.2rem;
  margin-bottom: 2rem;
  text-align: justify;
  columns: 1;
  font-size: 16px;
  font-family: "Lato";
  justify-content: center;
  margin-top: 2rem;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: row;
  }
`;
