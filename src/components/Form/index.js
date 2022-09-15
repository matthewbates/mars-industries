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

// set up an email.js account contact for Nick
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

  const firstName = (fName) => {
    fName.includes(/["A-Za-z"]/gi);

    if (firstName !== fName) {
      return fName.error("Please include a valid first name");
    } else {
      return firstName;
    }
  };

  const lastName = (lName) => {
    lName.includes(/["A-Za-z"]/gi);

    if (lastName !== lName) {
      return lName.error("Please include a valid last name");
    } else {
      return lastName;
    }
  };

  return (
    <FormContainer>
      <Form onSubmit={handleOnSubmit}>
        <FormLabel firstName={firstName} className="required">
          First Name:
        </FormLabel>
        <TextInput
          lastName={lastName}
          type="text"
          name="user_first_name"
          required
        />
        <FormLabel className="required">Last Name:</FormLabel>
        <TextInput type="text" name="user_last_name" required />
        <FormLabel className="required"> Email Address:</FormLabel>
        <EmailInput type="email" name="user_email" required />
        <FormLabel> Phone Number:</FormLabel>
        <TextInput type="text" name="user_phone_number" required />
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
