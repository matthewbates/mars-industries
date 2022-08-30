import { MDBCardSubTitle } from "mdb-react-ui-kit";
import React from "react";
import {
  AboutContainer,
  AboutWrapper,
  AboutContent,
  AboutImg,
  TextWrapper,
} from "./AboutElements";
import { aboutData, itemData } from "./data";

export default function About({ imgStart }) {
  return (
    <AboutContainer id="Home">
      <AboutWrapper>
        {aboutData.map((item, index) => (
          <AboutContent key={index}>
            <p>{item.paragraph}</p>
            <AboutImg src={item.img} />
          </AboutContent>
        ))}
      </AboutWrapper>
    </AboutContainer>
  );
}

{
  /* {aboutData.map((item, index) => (
          <span>
            <AboutP key={index}>{item.paragraph}</AboutP>
            <img style={{ height: "50%", width: "50%" }} src={item.img} />
          </span>
        ))} */
}
