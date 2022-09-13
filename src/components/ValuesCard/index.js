import React from "react";
// import { ValuesCardContainer, ValuesCardWrapper } from "./ValuesCardElements";
import {
  ValuesCardWrapper,
  ValuesCardImg,
  ValuesCardTextWrapper,
  ValuesCardTextBody,
} from "./ValuesCardElements";

export default function ValuesCard({ title, img, values, styles }) {
  return (
    <ValuesCardWrapper>
      <ValuesCardImg background={img} />
      <ValuesCardTextWrapper>
        <ValuesCardTextBody>
          Lorem ipsum dolor sit amet consectetur, Ducimus, repudiandae
          temporibus omnis illum maxime quod deserunt eligendi dolor
        </ValuesCardTextBody>
      </ValuesCardTextWrapper>
    </ValuesCardWrapper>
  );
}

