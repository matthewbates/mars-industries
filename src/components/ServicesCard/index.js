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
            style={{ width: "80px", height: "80px" }}
            src={image}
            alt={alt}
          />
          <p>{title}</p>
        </span>
        <div className="overlay" style={style}>
          {description}
        </div>
      </CardWrapper>
    </ServiceCardContainer>
  );
}
