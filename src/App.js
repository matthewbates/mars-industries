import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Company from "./pages/Company";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import SiteMapRoutes from "./components/SiteMapRoutes";
import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div>
      <Router>
        <Navbar />
        {/* <Header /> */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/company" element={<Company />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="contact" element={<Contact />} />
          <Route path="/sitemaproutes" element={<SiteMapRoutes />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
