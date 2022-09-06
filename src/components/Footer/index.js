import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import {
  Box,
  Container,
  Row,
  Column,
  Heading,
  NavLinks,
  Contact,
  ContactSpan,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";
import { footerInfoData, socialIcons } from "./data";

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
              <Fragment key={index}>
                <ContactSpan>
                  <FontAwesomeIcon
                    icon={item.icon}
                    style={{ color: "white" }}
                  />
                  <Contact href={item.href}> {item.contact}</Contact>
                </ContactSpan>
              </Fragment>
            ))}
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            {/* {socialIcons.map((item, index) => (
              <SocialIcons key={index}>
                <SocialIconLink
                  style={item.IconTitle.IconStyle}
                  href={item.url}
                  target={item.target}
                  rel={item.rel}
                  aria-label={item.ariaLabel}
                />
              </SocialIcons>
            ))} */}
            <SocialIcons>
              <SocialIconLink
                href="https://www.facebook.com"
                target="_blank"
                aria-label="Facebook"
              >
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.instagram.com"
                target="_blank"
                aria-label="Instagram"
              >
                <FaInstagram />
              </SocialIconLink>
            </SocialIcons>
          </Column>
        </Row>
      </Container>
    </Box>
  );
}
