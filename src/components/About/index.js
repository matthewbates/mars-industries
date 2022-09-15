import { display } from "@mui/system";
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
    // <AboutContainer id="Home">
    //   <AboutWrapper>
    //     {aboutData.map((item, index) => (
    //       <AboutContent key={index}>
    //         <p>{item.paragraph}</p>
    //         <AboutImg src={item.img} />
    //       </AboutContent>
    //     ))}
    //   </AboutWrapper>
    // </AboutContainer>
    <AboutContainer>
      <h1 style={{ textAlign: "center" }}>Why Choose Us</h1>
      <span
        style={{
          padding: "4rem",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <p>
          aldfal;sdfkjasldfkjasdlfjkadlf;ajsdfl;akjdfl;akjsdfl;asjdfl;askdjfla;dsjfal;sdkjfal;sdkfjal;sdfjkal;sdfjkal;sdfjkal;sdfjal;sdfjkas;ldfjkals;dfkjal;sdfjkal;sdfjkasd
        </p>
      </span>
    </AboutContainer>
  );
}
