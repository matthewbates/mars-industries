import React from "react";
import Card from "../Card";
import { CardItemContainer } from "./CardItemElements";
import { services } from "./data";

export default function CardItem() {
  return (
    <CardItemContainer>
      {services.map((item, index) => (
        <Card
          key={index}
          title={item.title}
          description={item.description}
          icon={item.icon}
        />
      ))}
    </CardItemContainer>
  );
}
