import styled from "styled-components";

export const SliderContainer = styled.div`
  height: auto;
  max-height: 50vh;
  max-width: 100%;
  position: relative;
  margin: 1.5rem;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    height: auto;
    max-height: 30vh;
  }
`;
