import styled from "styled-components";
import CONSTANTS from "../../utils/constants";

export const ServiceCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  justify-content: center;
  align-items: center;
  max-width: 768px;
  cursor: pointer;
`;

export const CardWrapper = styled.div`
  position: relative;
  display: flex;
  background: #fff;
  border-radius: 14px;
  box-shadow: 6px 6px 10px #00000010;
  text-align: center;
  justify-content: center;
  align-items: center;
  padding: 30px 20px;
  width: 160px;
  height: 204px;
  margin: 0 10px 20px;

  &:hover .overlay {
    height: 100%;
    transition: all 0.3s ease-out;
  }

  .overlay {
    border-radius: 20px;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: ${CONSTANTS.colors.facebookBlue};
    overflow: hidden;
    width: 100%;
    height: 0%;
    transition: 200ms ease-in;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 14px;
  }

  p {
    color: ${CONSTANTS.colors.royalBlue};
    font-weight: bold;
    font-size: 14px;
    font-family: "Lato";
  }
`;
