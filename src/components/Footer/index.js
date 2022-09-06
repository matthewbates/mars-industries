import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Box,
  Container,
  Row,
  Column,
  Heading,
  NavLinks,
  FooterContact,
} from "./FooterElements";
// import { FaFacebook, FaInstagram } from "react-icons/fa";
import { footerInfoData } from "./data";
// import NavLinks from "../NavLinks";

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
              <FooterContact key={index}>
                <FontAwesomeIcon icon={item.icon} />
                <a href={item.href}> {item.contact}</a>
              </FooterContact>
            ))}
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <NavLinks to="/">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>Facebook</span>
              </i>
            </NavLinks>
            <NavLinks to="/">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>Instagram</span>
              </i>
            </NavLinks>
          </Column>
        </Row>
      </Container>
    </Box>
  );
}

// <FooterContainer>
//   <FooterWrap>
//     <FooterH2>MARS Industries</FooterH2>
//     <NavLinks title={"Home"} />
//     <NavLinks title={"Projects"} />
//     {/* <NavLinks title={"Contact"} /> */}
//     <Link to="/contact">Contact</Link>
//     <div>
//       {footerInfoData.map((item, index) => (
//         <FooterLi key={index}>
//           <FontAwesomeIcon icon={item.icon} />
//           <FooterA href={item.href}>{item.contact}</FooterA>
//         </FooterLi>
//       ))}
//     </div>
//   </FooterWrap>
// </FooterContainer>
