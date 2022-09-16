import React from "react";
import CONSTANTS from "../../utils/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
import { footerInfoData } from "./data";
import Socials from "../Socials";

export default function Footer() {
  return (
    <Box>
      <h1>MARS Industries</h1>
      <Container>
        <Row>
          <Column>
            <Heading>Links</Heading>
            <NavLinks to="/">Home</NavLinks>
            <NavLinks to="/services">Services</NavLinks>
            <NavLinks to="/contact">Contact</NavLinks>
          </Column>
          <Column>
            <Heading>Contact</Heading>
            {footerInfoData.map((item, index) => (
              <ContactSpan key={index}>
                <FontAwesomeIcon
                  icon={item.icon}
                  style={{ color: `${CONSTANTS.colors.softBlack}` }}
                />
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
      <CopyrightText>
        Copyright © {new Date().getFullYear()} MARS Industries. All rights
        reserved.
      </CopyrightText>
    </Box>
  );
}
