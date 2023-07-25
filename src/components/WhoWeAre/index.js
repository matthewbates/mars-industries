import React from "react";
import background from "../../assets/jobs/carousel_1.jpg";
import {
  WhoWeAreContainer,
  WhoWeAreWrapper,
  WhoWeAreImg,
  WhoWeAreH1,
  WhoWeAreItems,
  WhoWeAreTitle,
  WhoWeAreP,
  BackgroundImage,
} from "./WhoWeAreElements";
import Section from "../UseInView";
import { whoWeAreData } from "./data";

export default function WhoWeAre() {
  return (
    <WhoWeAreContainer>
      <BackgroundImage src={background} />
      <WhoWeAreItems>
        <WhoWeAreTitle>Who We Are</WhoWeAreTitle>
        <Section>
          <WhoWeAreP>{whoWeAreData[0].text}</WhoWeAreP>
        </Section>
        <Section>
          <WhoWeAreP>{whoWeAreData[1].text}</WhoWeAreP>
        </Section>
      </WhoWeAreItems>
    </WhoWeAreContainer>
  );
}
