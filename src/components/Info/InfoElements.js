import styled from "styled-components";
import CONSTANTS from "../../utils/constants";

export const PartnerContainer = styled.div`
  background: ${({ top }) => (top ? "#3B5998" : "#3B5998")};
`;

export const PartnerWrapper = styled.div`
  display: grid;
  z-index: 1;
  /* below was 460px before alteration */
  height: 500px;
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 24px;
  justify-content: center;

  @media screen and (max-width: 768px) {
    height: 580px;
  }
`;

export const PartnerRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `"col2 col1"` : `"col1 col2"`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `"col1" "col2"` : `"col1 col1" "col2 col2"`};
    text-align: center;
    line-height: 2rem;
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const PartnerTextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;

export const PartnerTopLine = styled.p`
  font-family: "Lato";
  color: ${({ lightText }) =>
    lightText ? `${CONSTANTS.colors.limeGreen}` : "blue"};
  font-size: 26px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
  text-align: center;

  @media screen and (max-width: 768px) {
    margin-top: 4rem;
  }
`;

export const PartnerHeading = styled.h3`
  text-align: center;
  margin-bottom: 24px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? "blue" : "#010606")};
`;

export const PartnerSubtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? "#010606" : "#fff")};
`;

export const PartnerBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const PartnerImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;

export const PartnerImg = styled.img`
  width: 90%;
  align-items: center;
  justify-content: center;
  object-fit: contain;

  @media screen and (max-width: 768px) {
    width: 80%;
  }
`;
