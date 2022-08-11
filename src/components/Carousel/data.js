import slide1 from "../../assets/jobs/carousel_1.jpg";
import slide2 from "../../assets/jobs/carousel_2.jpg";
import slide3 from "../../assets/jobs/carousel_3.jpg";

export const slides = [
  {
    img: slide1,
    alt: "slide-1",
  },
  {
    img: slide2,
    alt: "slide-2",
  },
  {
    img: slide3,
    alt: "slide-3",
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
