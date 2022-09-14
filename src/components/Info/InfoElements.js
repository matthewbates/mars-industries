import styled from "styled-components";
import CONSTANTS from "../../utils/constants";

export const PartnerContainer = styled.div`
  background: ${CONSTANTS.colors.eggshellWhite};
`;

export const PartnerWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 460px;
  width: 100%;
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 24px;
  justify-content: center;
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
  color: #01bf71;
  font-size: 26px;
  /* line-height: 16px; */
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const PartnerHeading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#010606")};

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
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
  justify-content: flex-start;
`;

export const PartnerImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;

export const PartnerImg = styled.img`
  width: 90%;
  /* margin-left: auto; */
  /* margin-right: auto; */
  align-items: center;
  justify-content: center;
  padding-right: 0;
  object-fit: contain;

  @media screen and (max-width: 768px) {
    width: 50%;
  }
`;
