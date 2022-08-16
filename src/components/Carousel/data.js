import slide1 from "../../assets/jobs/carousel_1.jpg";
import slide2 from "../../assets/jobs/carousel_2.jpg";
import slide3 from "../../assets/jobs/carousel_3.jpg";

export const slides = [
  {
    img: slide1,
    alt: "slide-1",
    style: {
      height: "100%",
      width: "100%",
      objectFit: "cover",
      justifyContent: "center",
      textAlign: "center",
    },
  },
  {
    img: slide2,
    alt: "slide-2",
    style: {
      height: "100%",
      width: "100%",
      objectFit: "cover",
      justifyContent: "center",
      textAlign: "center",
    },
  },
  {
    img: slide3,
    alt: "slide-3",
    style: {
      height: "100%",
      width: "100%",
      objectFit: "cover",
      justifyContent: "center",
      textAlign: "center",
    },
  },
];

export const settings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  classname: "slides",
};
