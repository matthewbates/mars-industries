import React from "react";
import {useInView} from "react-intersection-observer";
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
  
const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  
  return (
    <WhoWeAreContainer>
      <WhoWeAreImg src={background} />
      <WhoWeAreWrapper>
        <div ref={ref} className={inView ? "listItem animate" : "listItem"}>
          <WhoWeAreH1>Who We Are</WhoWeAreH1>
          <WhoWeAreP>
            With over 50 years of combined experience, Joel & Co. Construction
            has steadily grown from a modest home remodeling contractor into a
            large-scale commerical and residential construction business. Today,
            the company continues to maintain their client-first approach, and
            insist on bringing integrity, honesty, and transparency to every
            job, every time.
          </WhoWeAreP>
          <WhoWeAreP>
            The company’s continued success is due in part to their commitment
            to practicing safe construction methods and strict compliance with
            all applicable laws, rules and regulations. They work closely with
            clients, civil and structural engineers, architects and designers
            with a collaborative mindset and a common goal: to deliver a
            successful and beautiful project.
          </WhoWeAreP>
        </div>
      </WhoWeAreWrapper>
    </WhoWeAreContainer>
  );
}
