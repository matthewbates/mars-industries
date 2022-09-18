import styled from "styled-components";

export const SliderContentContainer = styled.div`
  height: auto;
  max-width: 50%;
  position: relative;

  .active {
    display: inline-block;
  }

  .inactive {
    display: none;
  }

  /* @media screen and (max-width: 768px) {
    height: 40vh;
  } */
`;

export const SliderContentImg = styled.img`
  width: 100vw;
  max-height: auto;
  height: 100%;
  object-fit: cover;
`;
