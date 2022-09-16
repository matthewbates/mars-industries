import React from "react";
import { DotsContainer, DotsSpan } from "./DotElements";

export default function Dots({ activeIndex, onClick, sliderImages }) {
  return (
    <DotsContainer className="all-dots">
      {sliderImages.map((item, index) => (
        <span
          key={index}
          className={`${activeIndex === index ? "dot active-dot" : "dot"}`}
          onClick={() => onClick(index)}
        ></span>
      ))}
    </DotsContainer>
  );
}
