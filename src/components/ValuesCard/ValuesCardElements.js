import styled from "styled-components";
import CONSTANTS from "../../utils/constants";

export const ValuesCardWrapper = styled.div`
  display: grid;

  grid-template-columns: 340px;
  grid-template-rows: 250px 180px 100px;
  grid-template-areas: "image" "text" "stats";
  border-radius: 20px;
  background: ${CONSTANTS.colors.royalBlue};
  box-shadow: 6px 6px 10px #00000010;
  
`;

export const ValuesCardImg = styled.div`
  grid-area: image;
  background-image: url(${({ background }) => background});
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-size: cover;
`;

export const ValuesCardTextWrapper = styled.div`
  grid-area: text;
  margin: 25px;
`;

export const ValuesCardTextTitle = styled.h4`
  color: ${CONSTANTS.colors.offWhite};
  font-size: 28px;
  text-align: left;
  font-family: "Poppins";
`;

export const ValuesCardTextBody = styled.p`
  color: ${CONSTANTS.colors.offWhite};
  font-family: "Poppins";
  font-size: 15px;
  text-align: left;
  font-weight: 300;
`;
