import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const NavbarContainer = styled.div`
  display: flex;
  height: 50px;
`;

export const LinkBtn = styled(LinkR)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
