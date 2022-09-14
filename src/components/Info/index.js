import React from "react";
import {
  Column1,
  Column2,
  PartnerBtnWrap,
  PartnerContainer,
  PartnerHeading,
  PartnerRow,
  PartnerSubtitle,
  PartnerTextWrapper,
  PartnerTopLine,
  PartnerWrapper,
  PartnerImgWrap,
  PartnerImg,
} from "./InfoElements";
import { useNavigate } from "react-router-dom";
import { Button } from "../ButtonElements";
import { BoyRounded } from "@mui/icons-material";

export default function Info({
  id,
  lightBg,
  imgStart,
  topLine,
  lightText,
  darkText,
  buttonLabel,
  heading,
  description,
  img,
  alt,
  primary,
}) {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/contact`;
    navigate(path);
  };

  return (
    <>
      <PartnerContainer lightBg={lightBg} id={id}>
        <PartnerWrapper>
          <PartnerRow imgStart={imgStart}>
            <Column1>
              <PartnerTextWrapper>
                <PartnerTopLine>{topLine}</PartnerTopLine>
                {/* <PartnerHeading lightText={lightText}>{heading}</PartnerHeading>
                <PartnerSubtitle darkText={darkText}>
                  {description}
                </PartnerSubtitle> */}
                <PartnerBtnWrap>
                  <Button onClick={routeChange} primary={primary ? 1 : 0}>
                    {buttonLabel}
                  </Button>
                </PartnerBtnWrap>
              </PartnerTextWrapper>
            </Column1>
            <Column2>
              <PartnerImgWrap>
                <PartnerImg src={img} alt={alt} />
              </PartnerImgWrap>
            </Column2>
          </PartnerRow>
        </PartnerWrapper>
      </PartnerContainer>
    </>
  );
}
