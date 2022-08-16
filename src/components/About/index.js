import React from "react";
import { AboutContainer, AboutContent, AboutP } from "./AboutElements";
import { aboutData } from "./data";

export default function About() {
  return (
    <AboutContainer>
      <AboutContent>
        {/* import data with paragraphs and images here */}
        {/* use two <divs> - one for the paragraph, one for the image */}
        {aboutData.map((item, index) => (
          <AboutP key={index}>{item.paragraph}</AboutP>
        ))}
      </AboutContent>
    </AboutContainer>
  );
}
