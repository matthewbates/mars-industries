import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { CardContainer } from "./CardElements";

export default function Card({ title, description, icon }) {
  const [hover, setHover] = useState(false);

  const handleMouseOver = () => {
    setHover(true);
  };
  const handleMouseOut = () => {
    setHover(false);
  };

  return (
    <CardContainer>
      <FontAwesomeIcon icon={icon} />
      {title}
      <div className="overlay">{description}</div>
    </CardContainer>
  );
}
