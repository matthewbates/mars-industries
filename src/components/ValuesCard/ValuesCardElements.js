import styled from "styled-components";
import CONSTANTS from "../../utils/constants";

export const ValuesCardWrapper = styled.div`
  display: grid;
  grid-template-columns: 400px;
  grid-template-rows: 200px;
  grid-template-areas: "image" "text" "stats";
  border-radius: 20px;
  background: ${CONSTANTS.colors.facebookBlue};
  box-shadow: 6px 6px 10px #00000010;
  text-align: center;
`;

export const ValuesCardImg = styled.div`
  grid-area: image;
  background-image: url(${({ background }) => background});
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background-size: cover;
`;

export const ValuesCardTextWrapper = styled.div`
  grid-area: text;
  margin: 25px;
`;

export const ValuesCardTextBody = styled.p`
  color: ${CONSTANTS.colors.offWhite};
  font-size: 15px;
  font-weight: 300;
`;
