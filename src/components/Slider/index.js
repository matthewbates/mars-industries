import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import { SliderContainer } from "./SliderElements";
import { sliderData } from "./data";

export default function Slider() {
  return (
    <SliderContainer>
      <AwesomeSlider
        style={{ height: "40vh", position: "relative" }}
        startup={true}
        bullets={false}
        mobileTouch={true}
      >
        {sliderData.map((item, index) => (
          <div key={index}>
            <img style={item.styles} src={item.img} />
          </div>
        ))}
      </AwesomeSlider>
    </SliderContainer>
  );
}
