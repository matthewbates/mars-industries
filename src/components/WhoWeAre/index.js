import React from "react";
import background from "../../assets/jobs/carousel_1.jpg";
import {
  WhoWeAreContainer,
  WhoWeAreWrapper,
  WhoWeAreImg,
  WhoWeAreH2,
  WhoWeAreP,
} from "./WhoWeAreElements";

// this component rests on the home page beneath the About Component
export default function WhoWeAre() {
  return (
    <WhoWeAreContainer>
      <WhoWeAreImg src={background} />
      <WhoWeAreH2>Who We Are</WhoWeAreH2>
      <WhoWeAreP>
        Joel & Co. Construction is a premier general contracting company located
        in Los Angeles, California serving the San Fernando Valley as well as
        the greater Los Angeles region. Specializing in new construction, custom
        home building, residential renovations, and commercial construction,
        Joel & Co. always strives toward sustainable, eco-friendly construction,
        and best practices. The company thrives on making the difficult,
        delightful and is particularly passionate about kitchen and bathroom
        remodeling and room additions.
      </WhoWeAreP>
    </WhoWeAreContainer>
  );
}
