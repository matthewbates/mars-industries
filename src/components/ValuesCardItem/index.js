import React from "react";
import { ValuesCardItemContainer } from "./ValuesCardElements";
import { useInView } from "react-intersection-observer";
import { values } from "./data";
import ValuesCard from "../ValuesCard";
import ScrollEffect from "../ScrollEffect";

export default function Values() {
  const { ref, inView } = useInView({ threshold: 0.4, triggerOnce: true });
  
  return (
    <ValuesCardItemContainer>
      {values.map((item, index) => (
        <ScrollEffect key={index}>
          <ValuesCard
            title={item.title}
            img={item.img}
            values={item.values}
            styles={item.styles}
          />
        </ScrollEffect>
      ))}
    </ValuesCardItemContainer>
  );
}
