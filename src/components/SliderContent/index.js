import React from "react";
import {
  SliderContentContainer,
  SliderContentImg,
} from "./SliderContentElements";
import slides from "../sliderImage"

export default function SliderContent({ activeIndex }) {
  return (
    <section>
      {slides.map((item, index) => (
        <SliderContentContainer
          key={index}
          className={index === activeIndex ? "slides active" : "inactive"}
        >
          <SliderContentImg src={item.urls} />
        </SliderContentContainer>
      ))}
    </section>
  );
}
