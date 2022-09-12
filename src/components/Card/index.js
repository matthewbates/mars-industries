import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { CardContainer, CardWrapper } from "./CardElements";

export default function Card({ title, description, icon }) {
  return (
    <CardContainer>
      <CardWrapper>
        <span>
          <FontAwesomeIcon icon={icon} />
          <p>{title}</p>
        </span>
        <div className="overlay">{description}</div>
      </CardWrapper>
    </CardContainer>
  );
}
