import styled from "styled-components";
import { Link as LinkRoute } from "react-router-dom";

export const Box = styled.div`
  padding: 80px;
  background: black;

  @media (max-width: 768px) {
    padding: 60px 30px;
  }

  h1 {
    color: white;
    text-align: center;
    justify-content: center;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  margin-left: 60px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const NavLinks = styled(LinkRoute)`
  color: #fff;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;

  &:hover {
    color: orange;
    transition: 200ms ease-in;
  }
`;

export const FooterContact = styled.a`
  color: white;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;

  a {
    color: white;
    margin-bottom: 20px;
    font-size: 18px;
    text-decoration: none;
  }
`;

export const Heading = styled.p`
  font-size: 24px;
  color: #fff;
  margin-bottom: 40px;
  font-weight: bold;
  /* text-align: left; */
`;
