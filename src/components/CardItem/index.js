import React from "react";
import Card from "../Card";

export default function CardItem({ item, description, icon }) {
  return (
    <div>
      <Card item={item} description={description} icon={icon} />
    </div>
  );
}
