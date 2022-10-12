import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  Heading,
  NavLinks,
  Contact,
  ContactSpan,
} from "./FooterElements";
import { infoData } from "../infoData";
import Socials from "../Socials";
import Copyright from "../Copyright";
import SiteMap from "../../pages/SiteMap";
import TermsOfService from "../PrivacyPolicy";
import Author from "../Author"

export default function Footer() {
  return (
    <Box>
      <h1>Mars Industries</h1>
      <Container>
        <Row>
          <Column>
            <Heading style={{ fontSize: "20px" }}>Links</Heading>
            <NavLinks to="/">Home</NavLinks>
            <NavLinks to="/company">Company</NavLinks>
            <NavLinks to="/services">Services</NavLinks>
            <NavLinks to="/gallery">Gallery</NavLinks>
            <NavLinks to="/contact">Contact</NavLinks>
          </Column>
          <Column>
            <Heading style={{ fontSize: "20px" }}>Let's Chat</Heading>
            {infoData.map((item, index) => (
              <ContactSpan key={index}>
                <Contact href={item.href}> {item.contact}</Contact>
              </ContactSpan>
            ))}
          </Column>
          <Column>
            <Heading style={{ fontSize: "20px" }}>Connect With Us</Heading>
            <Socials />
          </Column>
        </Row>
      </Container>
      <div
        style={{
          marginTop: "3rem",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gap: ".5rem",
        }}
      >
        <SiteMap />·
        <TermsOfService />·
        <Author />
      </div>
      <Copyright />
    </Box>
  );
}
