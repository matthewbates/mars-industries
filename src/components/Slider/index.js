import React, { useState, useEffect } from "react";
import { SliderContainer } from "./SliderElements";
import Arrows from "../Arrows";
import Dots from "../Dots";
import SliderContent from "../SliderContent";
import sliderImage from "../sliderImage";
import "../slider.css";

const slideLength = sliderImage.length - 1;

export default function Slider() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === slideLength ? 0 : activeIndex + 1);
    }, 5500);
    return () => clearInterval(interval);
  }, [activeIndex]);

  const prevSlide = () => {
    setActiveIndex(activeIndex < 1 ? slideLength : activeIndex - 1);
  };

  const nextSlide = () => {
    setActiveIndex(activeIndex === slideLength ? 0 : activeIndex + 1);
  };

  return (
    <SliderContainer>
      <SliderContent activeIndex={activeIndex} sliderImage={sliderImage} />
      <Arrows prevSlide={prevSlide} nextSlide={nextSlide} />
      <Dots
        activeIndex={activeIndex}
        sliderImage={sliderImage}
        onClick={(activeIndex) => setActiveIndex(activeIndex)}
      />
    </SliderContainer>
  );
}
