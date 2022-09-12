import React from "react";
import ServicesCard from "../ServicesCard";
import { ServiceCardItemContainer } from "./CardItemElements";
import { services } from "./data";

export default function ServiceCardItem() {
  return (
    <ServiceCardItemContainer>
      {services.map((item, index) => (
        <ServicesCard
          key={index}
          title={item.title}
          description={item.description}
          icon={item.icon}
          style={item.style}
        />
      ))}
    </ServiceCardItemContainer>
  );
}
