import React from "react";
import logo from "../../assets/mc_placeholder.webp";
import {
  HeaderContainer,
  HeaderLogo,
  HeaderContact,
  HeaderA,
  HeaderLi,
} from "./HeaderElements";
import { headerInfoData } from "./data";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function HeaderInfo() {
  return (
    <div>
      <HeaderContainer>
        <HeaderLogo src={logo} alt="icon" />
        <HeaderContact>
          {headerInfoData.map((item, index) => {
            return (
              <HeaderLi key={index}>
                <FontAwesomeIcon icon={item.icon} />
                <HeaderA href={item.href}>{item.contact}</HeaderA>
              </HeaderLi>
            );
          })}
        </HeaderContact>
      </HeaderContainer>
    </div>
  );
}
