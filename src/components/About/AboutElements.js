import styled from "styled-components";

export const AboutContainer = styled.section`
  @media screen and (max-width: 768px) {
    padding: 50px 0;
  }
`;

export const AboutWrapper = styled.div`
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
    vertical-align: middle;
    justify-content: left;
    text-align: left;
  }
`;

export const TextWrapper = styled.div``;
