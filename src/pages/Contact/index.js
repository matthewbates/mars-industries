import React from "react";
import { ContactContainer, ImgText, ContactImg } from "./ContactElements";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import contact from "../../assets/contact_placeholder.jpg";

export default function Contact() {
  return (
    <ContactContainer>
      <Header />
      <Navbar />
      <div style={{ position: "relative" }}>
        <ContactImg src={contact} alt="contact" />
        <h1 style={{ position: "absolute" }}>Contact Us</h1>
      </div>
    </ContactContainer>
  );
}
