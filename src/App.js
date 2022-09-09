import React, { useState } from "react";
import About from "./components/About";
import Carousel from "./components/Carousel";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Dropdown from "./components/Dropdown";

export default function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Dropdown />
      <Carousel />
      <About />
      <Footer />
      {/* <Link to="/contact">Contact</Link> */}
    </div>
  );
}
