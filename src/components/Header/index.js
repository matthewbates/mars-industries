import React, { useState, useEffect } from "react";
import logo from "../../assets/mi_placeholder.png";
import {
  HeaderContainer,
  HeaderTitle,
  HeaderLogo,
  HeaderContact,
  HeaderA,
  HeaderLi,
} from "./HeaderElements";
import { Link } from "react-router-dom";
import { headerInfoData } from "./data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function HeaderInfo() {
  return (
    <HeaderContainer>
      {/* <Link to="/">
        <HeaderLogo src={logo} alt="icon" />
      </Link> */}
      <HeaderContact>
        {headerInfoData.map((item, index) => (
          <HeaderLi key={index}>
            <FontAwesomeIcon
              icon={item.icon}
              style={{ color: "white", fontSize: "12px" }}
            />
            <HeaderA href={item.href}> {item.contact}</HeaderA>
          </HeaderLi>
        ))}
      </HeaderContact>
    </HeaderContainer>
  );
}
