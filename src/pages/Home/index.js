import React, { useEffect } from "react";

import About from "../../components/About";
import WhoWeAre from "../../components/WhoWeAre";
import Relationships from "../../components/Relationships";
import Slider from "../../components/Slider";

export default function Home() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Slider />
      <About className="slider-container" />
      <WhoWeAre />
      <Relationships />
    </>
  );
}
