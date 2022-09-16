import React from "react";
import { SliderContentContainer } from "./SliderContentElements";

export default function SliderContent({ activeIndex, sliderImages }) {
  return (
    <SliderContentContainer>
      {sliderImages.map((item, index) => (
        <div
          key={index}
          className={index === activeIndex ? "slides active" : "inactive"}
        >
          <img className="slide-image" src={item.img} alt="" />
          <h2 className="slide-title">{item.title}</h2>
          <h3 className="slide-text">{item.description}</h3>
        </div>
      ))}
    </SliderContentContainer>
  );
}
