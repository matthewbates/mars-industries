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
`;

export const SliderContentImg = styled.img`
  visibility: visible;
  background: rgb(224, 224, 224);
  padding: 0px;
  margin: 0px auto;
  height: 432px;
  display: block;
  width: 100vw;
  overflow: visible;
  object-fit: cover;
`;
