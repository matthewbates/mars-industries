import React from "react";
import About from "./components/About";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import HeaderInfo from "./components/HeaderInfo";
import HeaderLinks from "./components/HeaderNav";

export default function App() {
  return (
    <div>
      <HeaderInfo />
      <HeaderLinks />
      <Carousel />
      <About />
      <Footer />
    </div>
  );
}
