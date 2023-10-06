import styled from "styled-components";

import CONSTANTS from "../../utils/constants";

import BACKGROUND from "../../assets/jobs/carousel_1.jpg";

export const WhoWeAreContainer = styled.div`
  width: 100%;
  height: 100%;

  position: relative; /* Required for positioning the overlay and content */
`;

export const BackgroundImage = styled.div`
  background: url(${BACKGROUND}) no-repeat;
  background-size: cover; /* To stretch the image to cover the container */
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.5;
  filter: brightness(50%);
`;

export const WhoWeAreContent = styled.div`
  position: relative;
`;

export const WhoWeAreTitle = styled.div`
  display: flex;
  justify-content: center;
  font-family: "Cormorant Garamond";
  color: black;
  margin-top: 1em;
  font-size: 2em;
  font-weight: bold;
`;

export const WhoWeAreItems = styled.div`
  display: flex;
  margin: auto;
  z-index: 999;
  flex-direction: column;
  font-family: "Lato";
  gap: 1em;
  width: 100%;
  color: ${CONSTANTS.colors.eggshellWhite};
  transition: 0.3s ease-in-out;
  padding: 2em;

  @media screen and (min-width: 768px) {
    max-width: 40%;
  }
`;

export const WhoWeAreP = styled.p`
  text-align: justify;
  font-family: "Lato";
  justify-content: center;
  color: black;
  font-size: 1.2em;
  line-height: 1.6rem;
`;
