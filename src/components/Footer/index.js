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
import TermsOfService from "../TermsOfService";

export default function Footer() {
  return (
    <Box>
      <h1>Mars Industries</h1>
      <Container>
        <Row>
          <Column>
            <Heading style={{ fontSize: "18px" }}>Links</Heading>
            <NavLinks to="/">Home</NavLinks>
            <NavLinks to="/company">Company</NavLinks>
            <NavLinks to="/services">Services</NavLinks>
            <NavLinks to="/gallery">Gallery</NavLinks>
            <NavLinks to="/contact">Contact</NavLinks>
          </Column>
          <Column>
            <Heading style={{ fontSize: "18px" }}>Let's Chat</Heading>
            {infoData.map((item, index) => (
              <ContactSpan key={index}>
                <Contact href={item.href}> {item.contact}</Contact>
              </ContactSpan>
            ))}
          </Column>
          <Column>
            <Heading style={{ fontSize: "18px" }}>Connect With Us</Heading>
            <Socials />
          </Column>
        </Row>
      </Container>
      {/* <span
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "1.5rem",
          justifyContent: "center",
          fontSize: "14px",
          fontFamily: "Lato",
          marginTop: "3rem",
        }}
      >
        <SiteMap />
        <TermsOfService />
      </span> */}
      <Copyright />
    </Box>
  );
}
