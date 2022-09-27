import React from "react";
import { ServiceCardContainer, CardWrapper } from "./ServiceCardElements";

export default function ServicesCard({
  title,
  description,
  image,
  alt,
  style,
}) {
  return (
    <ServiceCardContainer>
      <CardWrapper>
        <span>
          <img
            style={{ width: "85px", height: "85px" }}
            src={image}
            alt={alt}
          />
          <h4 style={{ fontFamily: "Poppins" }}>{title}</h4>
        </span>
        <div className="overlay" style={style}>
          {description}
        </div>
      </CardWrapper>
    </ServiceCardContainer>
  );
}
