import React from "react";
import {
  HeaderContainer,
  HeaderH3,
  HeaderContactInfo,
  HeaderContactPhone,
  HeaderContactEmail,
} from "./ContactHeaderElements";

export default function ContactHeader() {
  return (
    <HeaderContainer>
      <HeaderH3>Contact</HeaderH3>
      <HeaderContactInfo>
        <HeaderContactPhone>Phone:</HeaderContactPhone>
        <HeaderContactEmail>Email:</HeaderContactEmail>
      </HeaderContactInfo>
    </HeaderContainer>
  );
}
