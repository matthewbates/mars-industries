import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export const footerInfoData = [
  {
    href: "tel:+7192430079",
    contact: "(719) 243-0079",
    icon: faPhone,
  },
  {
    href: "mailto:marsindustriesco@yahoo.com",
    contact: "MarsIndustriesCO@yahoo.com",
    icon: faEnvelope,
  },
];

export const socialIcons = [
  {
    IconStyle: {
      IconTitle: FaFacebook,
    },
    url: "https://www.facebook.com",
    target: "_blank",
    rel: "noopener noreferrer",
    ariaLabel: "Facebook",
  },
  {
    IconTitle: {
      IconTitle: FaInstagram,
    },
    url: "https://www.instagram.com",
    target: "_blank",
    rel: "noopener noreferrer",
    ariaLabel: "Instagram",
  },
];
