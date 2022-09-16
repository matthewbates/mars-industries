import styled from "styled-components";

export const DotsContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  top: 85%;
  justify-content: center;
  z-index: 200;

  .dot {
    cursor: pointer;
    height: 1.5rem;
    width: 1.5rem;
    margin: 0px 3px;
    background: rgba(0, 0, 0, 0.3);
    display: inline-block;
  }

  .active-dot,
  .dot:hover {
    background: rgba(255, 255, 255, 0.5);
  }
`;
