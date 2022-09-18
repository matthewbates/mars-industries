import React, { useState, useEffect } from "react";
import Home from "./pages/Home";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Dropdown from "./components/Dropdown";
import Loader from "./components/Loader";
import { SettingsInputComponentOutlined } from "@mui/icons-material";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  });
  return (
    <div>
      {/* {isLoading ? (
        <Loader />
      ) : ( */}
      <>
        <Header />
        <Navbar />
        <Dropdown />
        <Home />
        <Footer />
      </>
      {/* )} */}
    </div>
  );
}
