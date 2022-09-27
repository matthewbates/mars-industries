import React, { useEffect } from "react";
import { AboutContainer, AboutWrapper, AboutH2, AboutP } from "./AboutElements";
import ScrollEffect from "../ScrollEffect";
import { aboutData } from "./data";

export default function About() {
  return (
    <AboutContainer>
      <AboutWrapper>
        <ScrollEffect>
          <AboutH2>Providing Over 20 Years of Experience & Expertise</AboutH2>
        </ScrollEffect>
        <ScrollEffect>
          <AboutP>{aboutData[0].text}</AboutP>
        </ScrollEffect>
        <ScrollEffect>
          <AboutP>{aboutData[1].text}</AboutP>
        </ScrollEffect>
      </AboutWrapper>
    </AboutContainer>
  );
}
