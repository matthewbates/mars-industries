import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { SocialIcons, SocialIconLink } from "./SocialElements";

export default function Socials() {
  return (
    <>
      <SocialIcons>
        <SocialIconLink
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <FaFacebook />
        </SocialIconLink>
        <SocialIconLink
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </SocialIconLink>
      </SocialIcons>
    </>
  );
}
