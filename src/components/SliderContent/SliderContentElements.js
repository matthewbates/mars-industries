import styled from "styled-components";

export const SliderContentSection = styled.section`
  .active {
    display: inline-block;
  }

  .inactive {
    display: none;
  }
`;

export const SliderContentContainer = styled.div`
  height: auto;
  max-width: 50%;
  position: relative;

  .slides {
    height: 50vh;
    width: 100%;
    position: relative;
  }

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

export const SliderContentTitle = styled.h3`
  width: 100%;
  height: 100%;
  color: white;
  font-size: 40px;
  position: absolute;
  text-align: center;
  top: 40%;
  z-index: 10;
`;

export const SliderContentText = styled.p`
  width: 100%;
  height: 100%;
  color: white;
  font-size: 40px;
  position: absolute;
  text-align: center;
  top: 40%;
  z-index: 10;
  font-size: 2rem;
`;
