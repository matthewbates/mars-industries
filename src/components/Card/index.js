import React, { useState } from "react";
import { CardContainer } from "./CardElements";

export default function Card({ item, description, icon }) {
  const [hover, setHover] = useState(false);

  const handleToggle = () => {
    setHover(!hover);
  };

  return (
    <CardContainer>
      <div className="overlay"></div>
    </CardContainer>
  );
}
