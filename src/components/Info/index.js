import React from "react";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  InfoColumn1,
  InfoColumn2,
  InfoTextWrapper,
  InfoTopLine,
  InfoBtnWrap,
  InfoImgWrap,
  InfoImg,
} from "./InfoElements";
import { useNavigate } from "react-router-dom";
import { Button } from "../ButtonElements";

export default function Info({
  id,
  top,
  imgStart,
  topLine,
  lightText,
  buttonLabel,
  img,
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
      <InfoContainer top={top} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <InfoColumn1>
              <InfoTextWrapper>
                <InfoTopLine lightText={lightText}>{topLine}</InfoTopLine>
                <InfoBtnWrap>
                  {displayButton && (
                    <Button onClick={routeChange} primary={primary ? 1 : 0}>
                      {buttonLabel}
                    </Button>
                  )}
                </InfoBtnWrap>
              </InfoTextWrapper>
            </InfoColumn1>
            <InfoColumn2>
              <InfoImgWrap>
                <InfoImg src={img} alt={alt} />
              </InfoImgWrap>
            </InfoColumn2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
}
