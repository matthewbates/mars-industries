import React from "react";
import {
  RelationshipsContainer,
  RelationshipsWrapper,
  RelationshipsH2,
  RelationshipsP,
} from "./RelationshipElements";
import ScrollEffect from "../ScrollEffect";
import { useInView } from "react-intersection-observer";
import { relationshipData } from "./data";

export default function Relationships() {
  const { ref, inView } = useInView({ threshold: 0.4, triggerOnce: true });

  return (
    <RelationshipsContainer>
      <RelationshipsWrapper>
        <RelationshipsH2>Building Lasting Relationships</RelationshipsH2>
        <ScrollEffect>
          <RelationshipsP>{relationshipData[0].text}</RelationshipsP>
        </ScrollEffect>
        <ScrollEffect>
          <RelationshipsP>{relationshipData[1].text}</RelationshipsP>
        </ScrollEffect>
      </RelationshipsWrapper>
    </RelationshipsContainer>
  );
}
