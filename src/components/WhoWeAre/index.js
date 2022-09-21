import React from "react";
import background from "../../assets/jobs/carousel_1.jpg";
import {
  WhoWeAreContainer,
  WhoWeAreWrapper,
  WhoWeAreImg,
  WhoWeAreH1,
  WhoWeAreP,
} from "./WhoWeAreElements";

// this component rests on the home page beneath the About Component
export default function WhoWeAre() {
  return (
    <WhoWeAreContainer>
      <WhoWeAreImg src={background} />
      <WhoWeAreWrapper>
        <h1
          style={{
            textAlign: "center",
            fontSize: "36px",
            fontFamily: "Cormorant Garamond",
          }}
        >
          Who We Are
        </h1>
        <WhoWeAreP>
          With over 50 years of combined experience, Joel & Co. Construction has
          steadily grown from a modest home remodeling contractor into a
          large-scale commerical and residential construction business. Today,
          the company continues to maintain their client-first approach, and
          insist on bringing integrity, honesty, and transparency to every job,
          every time.
        </WhoWeAreP>
        <WhoWeAreP>
          The company’s continued success is due in part to their commitment to
          practicing safe construction methods and strict compliance with all
          applicable laws, rules and regulations. They work closely with
          clients, civil and structural engineers, architects and designers with
          a collaborative mindset and a common goal: to deliver a successful and
          beautiful project.
        </WhoWeAreP>
      </WhoWeAreWrapper>
    </WhoWeAreContainer>
  );
}
