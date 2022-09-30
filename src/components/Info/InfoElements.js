import styled from "styled-components";

export const InfoContainer = styled.div``;

export const InfoWrapper = styled.div`
  margin-top: 3rem;
  /* margin-bottom: 4rem; */
  display: grid;
  z-index: 1;
  height: 100%;
  padding: 0 24px;

  @media screen and (max-width: 768px) {
    /* height: 580px; */
  }
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  text-align: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `"col2 col1"` : `"col1 col2"`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `"col2" "col1"` : `"col1 col1" "col2 col2"`};
    text-align: center;
    line-height: 2rem;
  }
`;

export const InfoColumn1 = styled.div`
  padding: 0 10px;
  grid-area: col1;
`;

export const InfoColumn2 = styled.div`
  /* margin-bottom: 15px; */
  padding: 0 15px;
  grid-area: col2;
  justify-content: center;
`;

export const InfoTextWrapper = styled.div`
  padding-top: 0;
  padding-bottom: 60px;
`;

export const InfoTopLine = styled.p`
  font-family: "Lato";
  font-size: 26px;
  font-weight: 300;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  text-align: center;
  margin-top: 20%;
  color: black;

  @media screen and (max-width: 768px) {
    margin-top: 2rem;
  }
`;

export const InfoHeading = styled.h3`
  text-align: center;
  margin-bottom: 24px;
  line-height: 1.1;
  font-weight: 600;
`;

export const InfoSubtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
`;

export const InfoBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const InfoImgWrap = styled.div`
  height: 100%;

  @media screen and (max-width: 768px) {
    margin-top: 4rem;
  }
`;

export const InfoImg = styled.img`
  /* width: 80vw; */
  max-width: 70%;
  object-fit: contain;

  @media screen and (max-width: 768px) {
    max-width: 65%;
  }
`;
