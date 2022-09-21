import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LogoBtn } from "./LogoElements";

export default function Logo() {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/`;
    navigate(path);
  };

  return <LogoBtn onClick={routeChange}>MARS</LogoBtn>;
}
