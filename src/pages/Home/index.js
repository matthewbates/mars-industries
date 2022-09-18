import React from "react";
import About from "../../components/About";
import WhoWeAre from "../../components/WhoWeAre";
import Relationships from "../../components/Relationships";
import Slider from "../../components/Slider";

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
