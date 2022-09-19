import React from "react";
import {
  ContactContainer,
  ImgWrapper,
  ContactDiv,
  ContactH2,
  ContactH1,
} from "./ContactElements";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Form from "../../components/Form";
import Footer from "../../components/Footer";
import img1 from "../../assets/jobs/carousel_1.jpg";

export default function Contact() {
  return (
    <>
      <ContactContainer>
        <Header />
        <Navbar />
        <ImgWrapper>
          <ContactDiv src={img1} alt="" />
          <ContactH2>
            Make your next project a success with expertise that partners with
            you every step of the process. Fill out the form below and we will
            reach out as soon as possible.
          </ContactH2>
        </ImgWrapper>
        <ContactH1>Get In Touch</ContactH1>
        <Form />
        <Footer />
      </ContactContainer>
    </>
  );
}
