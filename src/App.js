import React from "react";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import HeaderInfo from "./components/HeaderInfo";
import HeaderLinks from "./components/HeaderNav";

export default function App() {
  return (
    <div>
      <HeaderInfo />
      <HeaderLinks />
      {/* <Carousel /> */}
      <Footer />
    </div>
  );
}
