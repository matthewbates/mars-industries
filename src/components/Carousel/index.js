import React, { useState } from "react";
import Slider from "react-slick";
import "../.././styles.css";
import { slides, settings } from "./data";
import { CarouselContainer, CarouselImg } from "./CarouselElements";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
} from "mdb-react-ui-kit";

export default function Carousel() {
  return (
    // <MDBCarousel showControls>
    //   <MDBCarouselInner>
    //     {slides.map((item, index) => {
    //       return (
    //         <MDBCarouselItem key={index}>
    //           <MDBCarouselElement src={item.img} alt="image" />
    //         </MDBCarouselItem>
    //       );
    //     })}
    //   </MDBCarouselInner>
    // </MDBCarousel>

    <CarouselContainer>
      <Slider {...settings}>
        {slides.map((item, index) => (
          <CarouselContainer key={index}>
            <CarouselImg src={item.img} alt={item.alt} />
          </CarouselContainer>
        ))}
      </Slider>
    </CarouselContainer>
  );
}
