import React from "react";
import { ValuesCardItemContainer } from "./ValueElements";
import { values } from "./data";
import ValuesCard from "../ValuesCard";

export default function Values() {
  return (
    <ValuesCardItemContainer>
      {values.map((item, index) => (
        <ValuesCard
          key={index}
          title={item.title}
          img={item.img}
          values={item.values}
          styles={item.styles}
        />
      ))}
    </ValuesCardItemContainer>
  );
}
