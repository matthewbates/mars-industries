import styled from "styled-components";

export const FooterContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 30vh;
  background: grey;
  bottom: 0;
`;

export const FooterWrap = styled.div`
  padding: 18px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`;

export const FooterH2 = styled.h2`
  text-align: center;
`;

export const FooterLi = styled.li`
  list-style: none;
  margin-top: 1rem;
  margin: 10px;
  text-align: center;
`;

export const FooterA = styled.a`
  flex-direction: column;
  text-decoration: none;
  color: black;
  margin-left: 5px;
`;
