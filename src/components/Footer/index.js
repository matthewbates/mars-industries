import React from "react";
import CONSTANTS from "../../utils/constants";
import {
  Box,
  Container,
  Row,
  Column,
  Heading,
  NavLinks,
  Contact,
  ContactSpan,
  CopyrightText,
} from "./FooterElements";
import { infoData } from "../infoData";
import Socials from "../Socials";
import Copyright from "../Copyright";

export default function Footer() {
  return (
    <Box>
      <h1>Mars Industries</h1>
      <Container>
        <Row>
          <Column>
            <Heading>Links</Heading>
            <NavLinks to="/">Home</NavLinks>
            <NavLinks to="/company">Company</NavLinks>
            <NavLinks to="/services">Services</NavLinks>
            <NavLinks to="/gallery">Gallery</NavLinks>
            <NavLinks to="/contact">Contact</NavLinks>
          </Column>
          <Column>
            <Heading>Contact</Heading>
            {infoData.map((item, index) => (
              <ContactSpan key={index}>
                <Contact href={item.href}> {item.contact}</Contact>
              </ContactSpan>
            ))}
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <Socials style={{ color: "white" }} />
          </Column>
        </Row>
      </Container>
      <Copyright />
    </Box>
  );
}
