import styled from "styled-components";
import CONSTANTS from "../../utils/constants";

export const WhoWeAreContainer = styled.div`
  position: relative;
  text-align: center;
  justify-content: center;
  height: 100%;
  color: white;

  .listItem {
    display: flex;
    align-items: center;
    flex-direction: row;
    margin: 40px 0px 40px;
    justify-content: center;
    /* Pre-animation */
    opacity: 0;
    transform: scale(85%);
    transition: 1s;
    @media (max-width: 900px) {
      flex-direction: column;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: left;
    }
  }
  .animate {
    opacity: 1;
    transition: 1s;
    transform: scale(100%);
  }
`;

export const WhoWeAreWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: justify;
  max-width: 420px;

  @media screen and (max-width: 768px) {
    width: 80%;
  }
`;

export const WhoWeAreImg = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  filter: brightness(20%);

  @media screen and (max-width: 768px) {
    height: 80vh;
  }
`;

export const WhoWeAreH1 = styled.h1`
  text-align: center;
  font-family: "Cormorant Garamond";
`;

export const WhoWeAreP = styled.p`
  line-height: 1.6rem;
  /* margin-bottom: 4rem; */
  text-align: justify;
  columns: 1;
  font-size: 16px;
  font-family: "Lato";
  justify-content: center;
  margin-top: 2rem;
`;
