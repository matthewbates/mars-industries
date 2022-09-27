import React from "react";
import background from "../../assets/jobs/carousel_1.jpg";
import {
  WhoWeAreContainer,
  WhoWeAreWrapper,
  WhoWeAreImg,
  WhoWeAreH1,
  WhoWeAreP,
} from "./WhoWeAreElements";
import ScrollEffect from "../ScrollEffect";
import { whoWeAreData } from "./data";

export default function WhoWeAre() {
  return (
    <WhoWeAreContainer>
      <WhoWeAreImg src={background} />
      <WhoWeAreWrapper>
        <ScrollEffect>
          <WhoWeAreH1>Who We Are</WhoWeAreH1>
        </ScrollEffect>
        <ScrollEffect>
          <WhoWeAreP>{whoWeAreData[0].text}</WhoWeAreP>
        </ScrollEffect>
        <ScrollEffect>
          <WhoWeAreP>{whoWeAreData[1].text}</WhoWeAreP>
        </ScrollEffect>
      </WhoWeAreWrapper>
    </WhoWeAreContainer>
  );
}
