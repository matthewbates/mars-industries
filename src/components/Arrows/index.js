import React from "react";
import { ArrowsContainer, ArrowsSpan } from "./ArrowElements";

export default function Arrows({ prevSlide, nextSlide }) {
  return (
    <ArrowsContainer>
      <span className="prev" onclick={prevSlide}>
        &#10094;
      </span>
      <span className="next" onClick={nextSlide}>
        &#10095;
      </span>
    </ArrowsContainer>
  );
}
