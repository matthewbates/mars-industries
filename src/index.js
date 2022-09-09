import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
// import "mdb-react-ui-kit/dist/css/mdb.min.css";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/services" element={<Services />} />
      <Route path="contact" element={<Contact />} />
    </Routes>
  </Router>
);
