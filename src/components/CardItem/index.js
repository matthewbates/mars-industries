import React from "react";
import Card from "../Card";
import { CardItemContainer } from "./CardItemElements";

export default function CardItem({ title, description, icon }) {
  return (
    <CardItemContainer>
      <div className="listItem animate">
        <Card title={title} description={description} icon={icon} />
      </div>
    </CardItemContainer>
  );
}
