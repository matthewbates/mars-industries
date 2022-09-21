import React, { useEffect } from "react";
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
import gsap from "gsap";

export default function HeaderInfo() {
  useEffect(() => {
    gsap.from(".contact", {
      x: 100,
      delay: 0.5,
      opacity: 0,
      duration: 2,
      // stagger: 0.35,
    });
  }, []);

  return (
    <HeaderContainer>
      <SocialsWrapper>
        <Socials />
      </SocialsWrapper>
      <HeaderContact>
        {infoData.map((item, index) => (
          <HeaderLi key={index} className="contact">
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
