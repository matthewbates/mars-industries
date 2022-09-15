import React, { useState } from "react";
import Home from "./pages/Home";
import Header from "./components/Header";
import HeaderTitle from "./components/HeaderTitle";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Dropdown from "./components/Dropdown";

export default function App() {
  return (
    <div>
      <Header />
      {/* <HeaderTitle /> */}
      <Navbar />
      <Dropdown />
      <Home />
      <Footer />
      {/* <Link to="/contact">Contact</Link> */}
    </div>
  );
}
