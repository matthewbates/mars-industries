import styled from "styled-components";

export const ArrowsContainer = styled.div`
  .prev,
  .next {
    cursor: pointer;
    z-index: 100;
    position: absolute;
    top: 50%;
    width: auto;
    padding: 1rem;
    margin-top: -3rem;
    font-size: 40px;
    font-weight: bold;
    border-radius: 0px 5px 5px 0px;
  }

  .prev:hover,
  .next:hover {
    color: white;
    background: rgba(0, 0, 0, 1.6);
    transition: all 0.5s ease-in;
  }

  .next {
    right: 0;
    border-radius: 5px 0px 0px 5px;
  }
`;
