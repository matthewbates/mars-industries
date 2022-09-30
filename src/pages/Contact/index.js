import React from "react";
import {
  ContactContainer,
  ImgWrapper,
  ContactImg,
  ContactH3,
  ContactH2,
  ContactSubtitle,
} from "./ContactElements";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Form from "../../components/Form";
import Footer from "../../components/Footer";
import image from "../../assets/gallery/img6.jpg";

export default function Contact() {
  return (
    <>
      <ContactContainer>
        {/* <Header />
        <Navbar /> */}
        <ContactH3>Contact</ContactH3>
        <ImgWrapper>
          <ContactImg src={image} alt="" />
          <ContactH2>
            Make your next project a success with expertise that partners with
            you every step of the process. Fill out the form below and we will
            reach out as soon as possible.
          </ContactH2>
        </ImgWrapper>
        <ContactSubtitle>Tell Us About Your Project</ContactSubtitle>
        <Form />
        {/* <Footer /> */}
      </ContactContainer>
    </>
  );
}
