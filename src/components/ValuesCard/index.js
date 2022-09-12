import React from "react";
import { ValuesCardContainer, ValuesCardWrapper } from "./ValuesCardElements";

export default function ValuesCard({ title, img, values, styles }) {
  return (
    <ValuesCardContainer>
      <ValuesCardWrapper>
        <span>
          <img
            style={{
              borderRadius: "20px 20px 0 0 ",
              height: "60%",
              width: "300px",
              objectFit: "cover",
            }}
            src={img}
          />
          <p style={styles}>{values}</p>
        </span>
      </ValuesCardWrapper>
    </ValuesCardContainer>
  );
}
