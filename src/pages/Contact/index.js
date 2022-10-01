import React from "react";
import {
  ContactContainer,
  ImgWrapper,
  ContactImg,
  ContactH3,
  ContactH2,
  ContactSubtitle,
} from "./ContactElements";
import Form from "../../components/Form";
import image from "../../assets/gallery/img6.jpg";

export default function Contact() {
  return (
    <>
      <ContactContainer>
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
      </ContactContainer>
    </>
  );
}
