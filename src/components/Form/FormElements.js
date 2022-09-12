import styled from "styled-components";
import CONSTANTS from "../../utils/constants";

export const FormContainer = styled.div`
  padding: 2rem;
  height: 80vh;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  .required::after {
    content: "*";
    color: red;
  }
`;

export const TextInput = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  padding: 15px;
  margin-bottom: 10px;
  font-size: 14px;
  background-color: transparent;
  resize: none;

  @media screen and (max-width: 768px) {
    width: 80%;
  }
`;

export const EmailInput = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  padding: 15px;
  margin-bottom: 10px;
  font-size: 14px;
  background-color: transparent;
  resize: none;

  @media screen and (max-width: 768px) {
    width: 80%;
  }
`;

export const TextArea = styled.textarea`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  padding: 15px;
  margin-bottom: 10px;
  font-size: 14px;
  background-color: transparent;
  resize: none;

  @media screen and (max-width: 768px) {
    width: 80%;
  }
`;

export const FormLabel = styled.label`
  display: flex;
  line-height: 2;
  font-family: "Open Sans";
  /* font-size: 14px; */
`;

export const FormButton = styled.button`
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 50%;
  cursor: pointer;
  text-transform: uppercase;
  padding: 20px;
  font-weight: 900;
  font-size: 14px;
  letter-spacing: 5px;
  transition: transform 0.25s;
  border: none;

  &:hover {
    box-shadow: none;
    transform: scale(1.05);
  }
`;
