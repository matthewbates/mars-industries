import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import About from "../../components/About";
import WhoWeAre from "../../components/WhoWeAre";
import Relationships from "../../components/Relationships";
import Slider from "../../components/Slider";
import { HomeContainer } from "./HomeElements";

export default function Home() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: false });

  return (
    <HomeContainer>
      <Slider />
      {/* <div ref={ref} className={inView ? "listItem animate" : "listItem"}> */}
        <About className="slider-container" />
        <WhoWeAre />
        <Relationships />
      {/* </div> */}
    </HomeContainer>
  );
}
