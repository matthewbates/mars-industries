import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { SocialIcons, SocialIconLink } from "./SocialElements";

export default function Socials({ headerOrFooter }) {
  return (
    <>
      <SocialIcons headerOrFooter={headerOrFooter}>
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
        <SocialIconLink
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Linkedin"
        >
          <FaLinkedin />
        </SocialIconLink>
      </SocialIcons>
    </>
  );
}
