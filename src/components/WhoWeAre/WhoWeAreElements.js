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
  top: 50%;
  left: 50%;
  text-align: justify;
  line-height: 1.5rem;
  font-weight: bold;
  transform: translate(-50%, -50%);
  max-width: 1120px;

  @media screen and (max-width: 768px) {
    font-size: 14px;
    line-height: 1.2rem;
  }
`;

export const WhoWeAreImg = styled.img`
  width: 100%;
  height: 60vh;
  object-fit: cover;
  filter: brightness(40%);
`;

export const WhoWeAreP = styled.p`
  columns: 2;
  line-height: 1.4rem;
  margin-bottom: 3rem;
  text-align: justify;
  columns: 1;
  font-size: 16px;
  font-family: "Lato";
  justify-content: center;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: row;
  }
`;
