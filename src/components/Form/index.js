import React, { useEffect } from "react";
import emailjs from "emailjs-com";
import swal from "sweetalert2";
import {
  FormContainer,
  Form,
  FormLabel,
  TextInput,
  EmailInput,
  TextArea,
  FormButton,
  FormFullName,
} from "./FormElements";

// set up an email.js account contact for Nick
const SERVICE_ID = "service_7j2rpfd";
const TEMPLATE_ID = "template_1rub8eh";
const USER_ID = "pxTQ3Ga0lBOJ4vGzM";

export default function ContactForm() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
      (r) => {
        swal.fire(
          "Message Sent",
          "Nick will respond to your inquiry shortly!",
          "success"
        );
      },
      (error) => {
        swal.fire("Ooops, something went wrong", error.text, "error");
      }
    );
    e.target.reset();
  };

  return (
    <FormContainer>
      <Form onSubmit={handleOnSubmit}>
        {/* <FormLabel className="required">First Name</FormLabel> */}
        <FormFullName>
          <TextInput
            placeholder="First name*"
            type="text"
            name="user_first_name"
            required
          />
          <TextInput
            placeholder="Last name*"
            type="text"
            name="user_last_name"
            required
          />
        </FormFullName>
        {/* <FormLabel className="required">Email Address</FormLabel> */}
        <EmailInput
          placeholder="Email address*"
          type="email"
          name="user_email"
          required
        />
        {/* <FormLabel className="required">Phone</FormLabel> */}
        <TextInput
          placeholder="Phone number*"
          type="text"
          name="user_phone_number"
          required
        />
        {/* <FormLabel>Subject</FormLabel> */}
        <TextInput placeholder="Subject" type="text" name="user_subject" />
        {/* <FormLabel className="required">Message</FormLabel> */}
        <TextArea
          placeholder="Your message*"
          name="user_message"
          cols="50"
          rows="6"
          required
        ></TextArea>

        <FormButton type="submit" className="submit-button" primary="true">
          Submit
        </FormButton>
      </Form>
    </FormContainer>
  );
}
