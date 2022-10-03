import React from "react";
import {
  PhilosophyContainer,
  PhilosophyWrapper,
  PhilosophyImg,
  PhilosophyH3,
  PhilosophyP,
  PhilosophyIntro,
} from "./PhilosophyElements";
import { philosophyIntro, philosophyData } from "./data";
import ScrollEffect from "../ScrollEffect";
import image1 from "../../assets/gallery/img3.jpg";

export default function Philosophy() {
  return (
    <PhilosophyContainer>
      <PhilosophyWrapper>
        <PhilosophyImg src={image1} />
        <PhilosophyIntro>{philosophyIntro[0].text}</PhilosophyIntro>
        {philosophyData.map((item, index) => (
          <ScrollEffect key={index}>
            <PhilosophyH3>{item.title}</PhilosophyH3>
            <PhilosophyP>{item.paragraph}</PhilosophyP>
          </ScrollEffect>
        ))}
      </PhilosophyWrapper>
    </PhilosophyContainer>
  );
}
