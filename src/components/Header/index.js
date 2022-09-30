import React from "react";
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
      <SocialsWrapper headerOrFooter={false}>
        <Socials />
      </SocialsWrapper>
      <HeaderContact>
        {infoData.map((item, index) => (
          <HeaderLi key={index} className="contact">
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
