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
  const [desktop, setDesktop] = useState(window.innerWidth < 768);

  const updateMedia = () => setDesktop(window.innerWidth < 768);

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, []);

  return (
    <div>
      <HeaderContainer>
        {/* {desktop ? ( */}
        <Link to="/">
          <HeaderLogo src={logo} alt="icon" />
        </Link>
        {/* <HeaderLogo src={logo} alt="icon" /> */}
        {/* ) : ( */}
        {/* <HeaderTitle>MARS Industries</HeaderTitle> */}
        {/* )} */}
        <HeaderContact>
          {headerInfoData.map((item, index) => (
            <HeaderLi key={index}>
              <FontAwesomeIcon icon={item.icon} />
              <HeaderA href={item.href}>{item.contact}</HeaderA>
            </HeaderLi>
          ))}
        </HeaderContact>
      </HeaderContainer>
    </div>
  );
}
