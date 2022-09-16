import React, { useState, useEffect } from "react";
import Arrows from "../Arrows";
import Dots from "../Dots";
import SliderContent from "../SliderContent";
import sliderImage from "../sliderImage";
import "../slider.css";

const len = sliderImage.length - 1;

export default function NewSlider() {
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
    <div className="slider-container">
      <SliderContent activeIndex={activeIndex} sliderImage={sliderImage} />
      <Arrows prevSlide={prevSlide} nextSlide={nextSlide} />
      <Dots
        activeIndex={activeIndex}
        sliderImage={sliderImage}
        onClick={(activeIndex) => setActiveIndex(activeIndex)}
      />
    </div>
  );
}
