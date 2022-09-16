import React, { useState, useEffect } from "react";
import Arrows from "../Arrows";
import Dots from "../Dots";
import SliderContent from "../SliderContent";
import { sliderImages } from "../sliderImages";
import { NewSliderContainer } from "./NewSliderElements";

const len = sliderImages.length - 1;

export default function NewSlider(props) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  const prevSlide = () => {
    setActiveIndex(activeIndex < 1 ? len : activeIndex - 1);
  };

  const nextSlide = () => {
    setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
  };

  return (
    <NewSliderContainer>
      <SliderContent activeIndex={activeIndex} sliderImages={sliderImages} />
      <Arrows prevSlide={prevSlide} nextSlide={nextSlide} />
      <Dots
        activeIndex={activeIndex}
        sliderImages={sliderImages}
        onClick={(activeIndex) => setActiveIndex(activeIndex)}
      />
    </NewSliderContainer>
  );
}
