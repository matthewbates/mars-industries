import React from "react";
import { Outlet, Link } from "react-router-dom";
import About from "./components/About";
import Contact from "./pages/Contact";
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
      <About />
      <Footer />
      <Link to="/contact">Contact</Link>
      {/* <Outlet /> */}
    </div>
  );
}
