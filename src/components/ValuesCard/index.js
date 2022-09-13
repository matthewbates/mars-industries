import React from "react";
// import { ValuesCardContainer, ValuesCardWrapper } from "./ValuesCardElements";
import {
  ValuesCardWrapper,
  ValuesCardImg,
  ValuesCardTextWrapper,
  ValuesCardTextTitle,
  ValuesCardTextBody,
} from "./ValuesCardElements";

export default function ValuesCard({ title, img, values, styles }) {
  return (
    <ValuesCardWrapper>
      <ValuesCardImg background={img} />
      <ValuesCardTextWrapper>
        <ValuesCardTextTitle>{title}</ValuesCardTextTitle>
        <ValuesCardTextBody style={styles}>{values}</ValuesCardTextBody>
      </ValuesCardTextWrapper>
    </ValuesCardWrapper>
  );
}
