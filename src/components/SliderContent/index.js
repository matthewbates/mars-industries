import React from "react";
import {
  SliderContentSection,
  SliderContentContainer,
  SliderContentImg,
} from "./SliderContentElements";
import slides from "../sliderImage";

export default function SliderContent({ activeIndex }) {
  return (
    <SliderContentSection>
      {slides.map((item, index) => (
        <SliderContentContainer
          key={index}
          className={index === activeIndex ? "slides active" : "inactive"}
        >
          <SliderContentImg src={item.urls} />
        </SliderContentContainer>
      ))}
    </SliderContentSection>
  );
}
