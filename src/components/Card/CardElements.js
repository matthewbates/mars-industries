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
  transition: all 0.5s ease-out;
  margin: 0 10px 20px;

  &:hover .overlay {
    height: 100%;
  }

  .overlay {
    position: absolute;
    width: 100%;
    border-radius: 20px;
    height: 0%;
    bottom: 0;
    left: 0;
    right: 0;
    background: blue;
  }
`;
