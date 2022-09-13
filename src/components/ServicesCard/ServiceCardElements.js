import styled from "styled-components";
import CONSTANTS from "../../utils/constants";

export const ServiceCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  justify-content: center;
  align-items: center;
  max-width: 768px;
  margin: 0 auto;
`;

export const CardWrapper = styled.div`
  position: relative;
  display: flex;
  background: #fff;
  border-radius: 20px;
  box-shadow: 6px 6px 10px #00000010;
  text-align: center;
  justify-content: center;
  align-items: center;
  padding: 30px 6px;
  width: 160px;
  height: 150px;
  margin: 0 10px 20px;

  &:hover .overlay {
    height: 100%;
    transition: 200ms ease-in;
  }

  .overlay {
    border-radius: 20px;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: ${CONSTANTS.colors.royalBlue};
    overflow: hidden;
    width: 100%;
    height: 0%;
    transition: 200ms ease-in;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  p {
    color: ${CONSTANTS.colors.royalBlue};
    font-weight: bold;
    font-family: "Poppins";
  }
`;
