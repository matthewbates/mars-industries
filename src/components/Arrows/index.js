import React from "react";
import { ArrowsContainer, ArrowsPrev, ArrowsNext } from "./ArrowElements";

export default function Arrows({ prevSlide, nextSlide }) {
  return (
    <ArrowsContainer>
      <ArrowsPrev onClick={prevSlide}>&#10094;</ArrowsPrev>
      <ArrowsNext onClick={nextSlide}>&#10095;</ArrowsNext>
    </ArrowsContainer>
  );
}
