import { display } from "@mui/system";
import { MDBCardSubTitle } from "mdb-react-ui-kit";
import React from "react";
import {
  AboutContainer,
  AboutWrapper,
  AboutContent,
  AboutImg,
  TextWrapper,
} from "./HomeElements";
import { aboutData, itemData } from "./data";
import Slider from "../../components/Slider";
import About from "../../components/About";
import WhoWeAre from "../../components/WhoWeAre";
import Relationships from "../../components/Relationships";

export default function Home() {
  return (
    <>
      <Slider />
      <About />
      <WhoWeAre />
      <Relationships />
    </>
  );
}
