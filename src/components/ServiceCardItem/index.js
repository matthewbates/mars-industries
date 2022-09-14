import React from "react";
import ServicesCard from "../ServicesCard";
import { ServiceCardItemContainer } from "./ServiceCardItemElements.js";
import { services } from "./data";

export default function ServiceCardItem() {
  return (
    <ServiceCardItemContainer>
      {services.map((item, index) => (
        <ServicesCard
          key={index}
          title={item.title}
          description={item.description}
          image={item.img}
          alt={item.alt}
          style={item.style}
        />
      ))}
    </ServiceCardItemContainer>
  );
}
