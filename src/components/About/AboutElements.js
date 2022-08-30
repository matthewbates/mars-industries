import styled from "styled-components";

export const AboutContainer = styled.section`
  background: tan;
  padding: 2rem;
  /* border: 1px solid; */
`;

export const AboutWrapper = styled.div`
  /* display: flex;
  flex-direction: column; */
  text-align: center;
`;

export const AboutImg = styled.img`
  padding: 1rem;
  height: 300px;
  object-fit: contain;

  @media screen and (max-width: 768px) {
    padding: 2rem;
  }
`;

export const AboutContent = styled.div`
  display: flex;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }

  p {
  }
`;

export const TextWrapper = styled.div``;
