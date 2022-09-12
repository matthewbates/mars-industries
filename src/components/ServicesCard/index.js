import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { ServiceCardContainer, CardWrapper } from "./CardElements";

export default function ServicesCard({ title, description, icon, style }) {
  return (
    <ServiceCardContainer>
      <CardWrapper>
        <span>
          <FontAwesomeIcon icon={icon} />
          <p>{title}</p>
        </span>
        <div className="overlay" style={style}>
          {description}
        </div>
      </CardWrapper>
    </ServiceCardContainer>
  );
}
