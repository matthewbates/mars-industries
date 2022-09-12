import styled from "styled-components";
import CONSTANTS from "../../utils/constants";

export const CardContainer = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  background: #fff;
  border-radius: 20px;
  box-shadow: 4px 4px 10px #00000010;
  text-align: center;
  justify-content: center;
  align-items: center;
  padding: 30px 6px;
  width: 160px;
  height: 204px;
  margin: 0 10px 20px;

  &:hover .overlay {
    height: 100%;
    transition: 200ms ease-in;
  }

  .overlay {
    position: absolute;

    bottom: 0;
    left: 0;
    right: 0;
    background: blue;
    overflow: hidden;
    width: 100%;
    height: 0%;
    transition: 200ms ease-in;
    color: white;
    display: flex;
  }

  p {
    color: black;
  }
`;
