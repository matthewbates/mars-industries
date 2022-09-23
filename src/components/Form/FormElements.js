import styled from "styled-components";
import CONSTANTS from "../../utils/constants";

export const FormContainer = styled.div`
  padding: 2rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  margin-bottom: 4rem;

  .required::after {
    content: "*";
    color: red;
  }
`;

export const TextInput = styled.input`
  font-family: "Cormorant Garamond";
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  padding: 15px;
  margin-bottom: 10px;
  font-size: 16px;
  background-color: transparent;
  resize: none;
  border: 1px solid ${CONSTANTS.colors.lightGrey};

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

export const EmailInput = styled.input`
  font-family: "Cormorant Garamond";
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  padding: 15px;
  margin-bottom: 10px;
  font-size: 16px;
  background-color: transparent;
  resize: none;
  border: 1px solid ${CONSTANTS.colors.lightGrey};

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

export const TextArea = styled.textarea`
  font-weight: bold;
  font-family: "Cormorant Garamond";
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  padding: 15px;
  margin-bottom: 10px;
  font-size: 16px;
  background-color: transparent;
  resize: none;
  border: 1px solid ${CONSTANTS.colors.lightGrey};

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

export const FormLabel = styled.label`
  display: flex;
  line-height: 2rem;
  font-family: "Lato";
`;

export const FormButton = styled.button`
  border: 1px solid ${CONSTANTS.colors.lightGrey};
  background-color: transparent;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 25%;
  cursor: pointer;
  text-transform: uppercase;
  padding: 15px;
  font-weight: 900;
  font-size: 14px;
  letter-spacing: 5px;
  transition: transform 0.25s;
  margin-top: 1rem;

  @media screen and (max-width: 768px) {
    width: 50%;
  }

  &:hover {
    box-shadow: none;
    background: ${CONSTANTS.colors.royalBlue};
    color: ${CONSTANTS.colors.eggshellWhite};
    transition: 200ms ease-in;
  }
`;
