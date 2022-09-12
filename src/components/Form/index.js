import React from "react";
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
} from "./FormElements";

const SERVICE_ID = "";
const TEMPLATE_ID = "";
const USER_ID = "";

export default function ContactForm() {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
      (r) => {
        console.log(r.text);
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
        <FormLabel className="required">First Name:</FormLabel>
        <TextInput type="text" name="user_first_name" required />
        <FormLabel className="required">Last Name:</FormLabel>
        <TextInput type="text" name="user_last_name" required />
        <FormLabel className="required"> Email Address:</FormLabel>
        <EmailInput type="email" name="user_email" required />
        <FormLabel> Phone Number:</FormLabel>
        <EmailInput type="email" name="user_email" required />
        {/* consider adding a dropdown for problems XYZ the user is inquiring about ⬇️ */}
        <FormLabel> Comments or Questions:</FormLabel>
        <TextArea name="user_message" cols="50" rows="10" required></TextArea>

        <FormButton type="submit" className="submit-button" primary="true">
          Submit
        </FormButton>
      </Form>
    </FormContainer>
  );
}
