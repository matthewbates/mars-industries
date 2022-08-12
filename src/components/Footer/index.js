import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FooterContainer, FooterH2, FooterWrap, FooterLi, FooterA } from "./FooterElements";
import { footerInfoData } from "./data";
import NavLinks from "../NavLinks";

export default function Footer() {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterH2>MARS Industries</FooterH2>
        <NavLinks title={"Home"} />
        <NavLinks title={"Projects"} />
        <NavLinks title={"Contact"} />
        <div>
          {footerInfoData.map((item, index) => (
            <FooterLi key={index}>
              <FontAwesomeIcon icon={item.icon} />
              <FooterA href={item.href}>{item.contact}</FooterA>
            </FooterLi>
          ))}
        </div>
      </FooterWrap>
    </FooterContainer>
  );
}
