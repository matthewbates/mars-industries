import React from "react";
import {
  RelationshipsContainer,
  RelationshipsWrapper,
  RelationshipsH2,
  RelationshipsP,
} from "./RelationshipElements";
import Section from "../UseInView";
import { relationshipData } from "./data";

export default function Relationships() {
  return (
    <RelationshipsContainer>
      <RelationshipsWrapper>
        <RelationshipsH2>Building Lasting Relationships</RelationshipsH2>
        <Section>
          <RelationshipsP>{relationshipData[0].text}</RelationshipsP>
        </Section>
        <Section>
          <RelationshipsP>{relationshipData[1].text}</RelationshipsP>
        </Section>
      </RelationshipsWrapper>
    </RelationshipsContainer>
  );
}
