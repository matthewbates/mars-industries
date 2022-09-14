import framing from "../../assets/images/framing.svg";
import excavations from "../../assets/images/excavations.svg";

export const servicesObjOne = {
  id: 1,
  top: true,
  topLine: "Speed to market services to optimize your projects",
  description:
    "Fully customized, turnkey, program management and contruction at scale.",
  imgStart: true,
  img: framing,
  dark: false,
  primary: false,
  darkText: false,
  top: false,
  displayButton: false,
};

export const servicesObjTwo = {
  id: 2,
  top: true,
  topLine: "Parter with MARS Industries for your next project",
  description:
    "Fully customized, turnkey, program management and construction at scale.",
  buttonLabel: "Contact us",
  imgStart: false,
  img: excavations,
  //   img: require("../../assets/images/excavations.svg"),
  alt: "image",
  dark: true,
  primary: true,
  darkText: true,
  top: false,
  displayButton: true,
};
