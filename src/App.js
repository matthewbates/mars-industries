import React, { useState } from "react";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Loader from "./components/Loader";

export default function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Sidebar />
      <Home />
      <Footer />
    </div>
  );
}
