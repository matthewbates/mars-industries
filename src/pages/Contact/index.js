import React from "react";
import {
  ContactContainer,
  ImgWrapper,
  ContactDiv,
  ContactImg,
  ImgH3,
  ContactH2,
} from "./ContactElements";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import contact from "../../assets/contact_placeholder.jpg";
import Form from "../../components/Form";
import Footer from "../../components/Footer";
import HeaderTitle from "../../components/HeaderTitle";

export default function Contact() {
  return (
    <>
      <ContactContainer>
        <Header />
        <Navbar />
        <ImgWrapper>
          <ContactDiv></ContactDiv>
          <ImgH3>
            Make your next project a success with expertise that partners with
            you every step of the process. Fill out the form below and I will
            reach out as soon as possible.
          </ImgH3>
        </ImgWrapper>
        <ContactH2>Get In Touch</ContactH2>
        <Form />
      </ContactContainer>
      <Footer />
    </>
  );
}
