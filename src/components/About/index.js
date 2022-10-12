import React from "react";
import { AboutContainer, AboutWrapper, AboutH2, AboutP } from "./AboutElements";
import ScrollEffect from "../ScrollEffect";
import Section from "../UseInView";
import { aboutData } from "./data";

export default function About() {
  return (
    <AboutContainer>
      <AboutWrapper>
        <AboutH2>Providing Over 20 Years of Experience & Expertise</AboutH2>
        <Section>
          <AboutP>{aboutData[0].text}</AboutP>
        </Section>
        <Section>
          <AboutP>{aboutData[1].text}</AboutP>
        </Section>
      </AboutWrapper>
    </AboutContainer>
  );
}
