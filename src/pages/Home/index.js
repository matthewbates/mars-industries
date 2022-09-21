import React, { useEffect } from "react";
import About from "../../components/About";
import WhoWeAre from "../../components/WhoWeAre";
import Relationships from "../../components/Relationships";
import Slider from "../../components/Slider";
import gsap from "gsap";

export default function Home() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    gsap.from(".slider-container", {
      x: 100,
      delay: 0.5,
      opacity: 0,
      duration: 2,
      ease: "back",
      stagger: 0.35,
    });
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
