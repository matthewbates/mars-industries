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
  top,
  imgStart,
  topLine,
  lightText,
  buttonLabel,
  img,
  heading,
  alt,
  primary,
  displayButton,
}) {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/contact`;
    navigate(path);
  };

  return (
    <>
      <PartnerContainer top={top ? 0 : 1} id={id}>
        <PartnerWrapper>
          <PartnerRow imgStart={imgStart}>
            <Column1>
              <PartnerTextWrapper>
                <PartnerTopLine lightText={lightText}>{topLine}</PartnerTopLine>
                <PartnerHeading>{heading}</PartnerHeading>
                <PartnerBtnWrap>
                  {displayButton && (
                    <Button onClick={routeChange} primary={primary ? 1 : 0}>
                      {buttonLabel}
                    </Button>
                  )}
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
