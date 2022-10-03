import styled from "styled-components";

export const WhoWeAreContainer = styled.div`
  position: relative;
  text-align: center;
  justify-content: center;
  height: 100%;
  color: white;
`;

export const WhoWeAreWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: justify;
  max-width: 420px;

  @media screen and (max-width: 768px) {
    width: 70%;
  }
`;

export const WhoWeAreImg = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  filter: brightness(20%);

  @media screen and (max-width: 768px) {
    height: 100vh;
  }
`;

export const WhoWeAreH1 = styled.h1`
  text-align: center;
  font-family: "Cormorant Garamond";
`;

export const WhoWeAreP = styled.p`
  line-height: 1.6rem;
  text-align: justify;
  columns: 1;
  font-size: 16px;
  font-family: "Lato";
  justify-content: center;
  margin-top: 2rem;
`;
