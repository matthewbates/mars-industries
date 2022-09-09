import React from "react";
import {
  FormContainer,
  FormWrapper,
  UserMessage,
  FormLabel,
  TextInput,
  EmailInput,
  TextArea,
  FormText,
  FormButton,
} from "./FormElements";

export default function Form() {
  return (
    <FormContainer>
      <FormWrapper id="myForm">
        <FormLabel className="required">First Name:</FormLabel>
        <TextInput type="text" name="user_first_name" required />
        <FormLabel className="required">Last Name:</FormLabel>
        <TextInput type="text" name="user_last_name" required />
        <FormLabel className="required"> Email Address:</FormLabel>
        <EmailInput type="email" name="user_email" required />
        <FormLabel> Phone Number:</FormLabel>
        {/* consider adding a dropdown for problems XYZ the user is inquiring about */}
        <EmailInput type="email" name="user_email" required />
        <FormLabel> Comments or Questions:</FormLabel>
        <TextArea name="user_message" cols="50" rows="10" required></TextArea>

        <FormButton type="submit" className="submit-button" primary="true">
          SEND
        </FormButton>
      </FormWrapper>
    </FormContainer>
  );
}
