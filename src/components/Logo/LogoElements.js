import styled from "styled-components";

export const LogoBtn = styled.span`
  display: flex;
  cursor: pointer;
  font-family: verdana;
  font-size: 1.8em;
  font-weight: 700;
  color: #e77d11;
  text-shadow: 1px 1px 1px black, 1px 2px 1px black, 1px 3px 1px black,
    1px 4px 1px black, 1px 5px 1px black, 1px 6px 1px black, 1px 7px 1px black,
    1px 8px 1px black, 1px 9px 1px black, 1px 10px 1px black,
    1px 18px 6px rgba(16, 16, 16, 0.4), 1px 22px 10px rgba(16, 16, 16, 0.2),
    1px 25px 35px rgba(16, 16, 16, 0.2), 1px 30px 60px rgba(16, 16, 16, 0.4);

  @media screen and (max-with: 768px) {
    justify-content: center;
    font-size: 12rem;
  }
`;
