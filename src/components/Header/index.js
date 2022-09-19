import React from "react";
import logo from "../../assets/mi_placeholder.png";
import {
  HeaderContainer,
  HeaderContact,
  HeaderA,
  HeaderLi,
  SocialsWrapper,
} from "./HeaderElements";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Socials from "../Socials";
import CONSTANTS from "../../utils/constants";
import { infoData } from "../infoData";

export default function HeaderInfo() {
  return (
    <HeaderContainer>
      <SocialsWrapper>
        <Socials />
      </SocialsWrapper>
      {/* <HeaderLogo src={logo} alt="icon" /> */}
      <HeaderContact>
        {infoData.map((item, index) => (
          <HeaderLi key={index}>
            <FontAwesomeIcon
              icon={item.icon}
              style={{
                color: `${CONSTANTS.colors.lightGrey}`,
                fontSize: "10px",
              }}
            />
            <HeaderA href={item.href}> {item.contact}</HeaderA>
          </HeaderLi>
        ))}
      </HeaderContact>
    </HeaderContainer>
  );
}
