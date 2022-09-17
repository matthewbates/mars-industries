import React from "react";
import { slides } from "./data";

export default function SliderContent({ activeIndex, sliderImage }) {
  return (
    <section>
      {slides.map((item, index) => (
        <div
          key={index}
          className={index === activeIndex ? "slides active" : "inactive"}
        >
          <img className="slide-image" src={item.img} />
          {/* <h2 className="slide-title">{item.title}</h2>
          <h3 className="slide-text">{item.description}</h3> */}
        </div>
      ))}
    </section>
  );
}
