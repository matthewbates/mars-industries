import React, { useState } from "react";
import Slider from "react-slick";
import "../.././styles.css";
import { slides, settings } from "./data";
import { CarouselContainer, CarouselImg } from "./CarouselElements";

export default function Carousel() {
  return (
    // <CarouselContainer>
    <Slider {...settings}>
      {slides.map((item, index) => (
        <CarouselContainer key={index}>
          <CarouselImg src={item.img} alt={item.alt} />
        </CarouselContainer>
      ))}
    </Slider>
    // </CarouselContainer>
  );
}
