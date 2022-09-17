import React from "react";
import logo from "../../assets/mi_placeholder.png";
import {
  HeaderContainer,
  HeaderTitle,
  HeaderLogo,
  HeaderContact,
  HeaderA,
  HeaderLi,
  SocialsWrapper,
} from "./HeaderElements";
import { headerInfoData } from "./data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Socials from "../Socials";
import CONSTANTS from "../../utils/constants";

export default function HeaderInfo() {
  return (
    <HeaderContainer>
      <SocialsWrapper>
        <Socials />
      </SocialsWrapper>
      {/* <HeaderLogo src={logo} alt="icon" /> */}
      <HeaderContact>
        {headerInfoData.map((item, index) => (
          <HeaderLi key={index}>
            <FontAwesomeIcon
              icon={item.icon}
              style={{
                color: `${CONSTANTS.colors.lightGrey}`,
                fontSize: "12px",
              }}
            />
            <HeaderA href={item.href}> {item.contact}</HeaderA>
          </HeaderLi>
        ))}
      </HeaderContact>
    </HeaderContainer>
  );
}
