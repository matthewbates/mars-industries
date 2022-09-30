import React, { useState, useEffect } from "react";
import { LoaderContainer } from "./LoaderElements";
import gsap from "gsap";
import DotLoader from "react-spinners/ClipLoader";

export default function Loader() {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");
  // useEffect(() => {
  //   gsap.from(".loading-title", {
  //     y: 100,
  //     opacity: 0,
  //     ease: "slow",
  //     duration: 2.3,
  //   });
  //   gsap.from(".loading-number", {
  //     duration: 2.5,
  //     textContent: 0,
  //     ease: "power1.in",
  //     snap: { textContent: 1 },
  //   });
  //   gsap.to([".loading-title", ".loading-number"], {
  //     delay: 2.8,
  //     duration: 1,
  //     opacity: 0,
  //   });
  // }, []);
  return (
    <div className="ui active dimmer">
      <DotLoader loading={loading} />
    </div>

    // <LoaderContainer>
    //   <div className="loading-container">
    //     <h1 className="loading-title">Loading</h1>
    //     <h1 className="loading-number">100%</h1>
    //   </div>
    // </LoaderContainer>
  );
}
