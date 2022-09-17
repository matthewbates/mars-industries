import React from "react";
import {
  RelationshipsContainer,
  RelationshipsWrapper,
  RelationshipsH2,
  RelationshipsP,
} from "./RelationshipElements";

export default function Relationships() {
  return (
    <RelationshipsContainer>
      <RelationshipsWrapper>
        <RelationshipsH2>Building Better Relationships</RelationshipsH2>
        <RelationshipsP>
          Joel & Co. Construction prides itself on being a different kind of
          company. The strong commitment to quality construction that the
          company is renowned for, in turn builds devotion and trust and better
          relationships with clients. Throughout the construction process, the
          teams maintain communication and transparency — and if something is
          wrong, it is guaranteed to be made right.
        </RelationshipsP>
        <RelationshipsP>
          Whether you’re looking for a general contractor in Los Angeles to
          finally give you the kitchen you deserve, or an experienced team of
          custom home builders to bring your dream house to life, the team
          cannot wait to work with you. To find out more about what Joel & Co.
          Construction can do for you, or to inquire about any of our services,
          feel free to make contact today.
        </RelationshipsP>
      </RelationshipsWrapper>
    </RelationshipsContainer>
  );
}
