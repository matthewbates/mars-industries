import React from "react";
import {
  ContactContainer,
  ImgWrapper,
  ContactDiv,
  ImgH3,
  ContactH2,
} from "./ContactElements";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Form from "../../components/Form";
import Footer from "../../components/Footer";

export default function Contact() {
  return (
    <>
      <ContactContainer>
        <Header />
        <Navbar />
        <ImgWrapper>
          <ContactDiv />
          <ImgH3>
            Make your next project a success with expertise that partners with
            you every step of the process. Fill out the form below and we will
            reach out as soon as possible.
          </ImgH3>
        </ImgWrapper>
        <ContactH2>Get In Touch</ContactH2>
        <Form />
        <Footer />
      </ContactContainer>
    </>
  );
}
