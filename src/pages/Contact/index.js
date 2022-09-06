import React from "react";
import { ContactContainer } from "./ContactElements";
import HeaderInfo from "../../components/Header";
import Navbar from "../../components/Navbar";

export default function Contact() {
  return (
    <ContactContainer>
      <HeaderInfo />
      <Navbar />
    </ContactContainer>
  );
}
