import framing from "../../assets/images/framing.svg";
import excavations from "../../assets/images/excavations.svg";
import one from "../../assets/jobs/carousel_1.jpg";

export const servicesObjOne = {
  id: 1,
  top: false,
  topLine:
    "20+ years of experience. Unforseen probems deal with on a regular basis.",
  description:
    "Fully customized, turnkey, program management and contruction at scale.",
  imgStart: false,
  heading: "This is the heading for servicesObjOne",
  img: framing,
  dark: false,
  primary: false,
  displayButton: false,
  color: false,
};

export const servicesObjTwo = {
  id: 2,
  top: false,
  topLine: "Parter with MARS Industries for your next project",
  heading: "THis is the heading for servicesObjTwo",
  description:
    "Fully customized, turnkey, program management and construction at scale.",
  buttonLabel: "Contact us",
  imgStart: true,
  img: excavations,
  //   img: require("../../assets/images/excavations.svg"),
  alt: "image",
  dark: true,
  primary: true,
  displayButton: true,
};
