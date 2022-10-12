import React from "react";
import background from "../../assets/jobs/carousel_1.jpg";
import {
  WhoWeAreContainer,
  WhoWeAreWrapper,
  WhoWeAreImg,
  WhoWeAreH1,
  WhoWeAreP,
} from "./WhoWeAreElements";
import Section from "../UseInView";
import { whoWeAreData } from "./data";

export default function WhoWeAre() {
  return (
    <WhoWeAreContainer>
      <WhoWeAreImg src={background} />
      <WhoWeAreWrapper>
        <WhoWeAreH1>Who We Are</WhoWeAreH1>
        <Section>
          <WhoWeAreP>{whoWeAreData[0].text}</WhoWeAreP>
        </Section>
        <Section>
          <WhoWeAreP>{whoWeAreData[1].text}</WhoWeAreP>
        </Section>
      </WhoWeAreWrapper>
    </WhoWeAreContainer>
  );
}
