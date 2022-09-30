import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Company from "./pages/Company";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <App />
  // <Router>
  //   <Routes>
  //     <Route path="/" element={<App />} />
  //     <Route path="/company" element={<Company />} />
  //     <Route path="/services" element={<Services />} />
  //     <Route path="/gallery" element={<Gallery />} />
  //     <Route path="contact" element={<Contact />} />
  //   </Routes>
  // </Router>
);
