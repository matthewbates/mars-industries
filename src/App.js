import React, { useState, useEffect } from "react";
import { AppContainer } from "./AppElements";
import Home from "./pages/Home";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Loader from "./components/Loader";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  });
  return (
    <AppContainer>
      {/* {isLoading ? (
        <Loader />
      ) : ( */}
      <>
        <Header />
        <Navbar />
        <Sidebar />
        <Home />
        <Footer />
      </>
      {/* )} */}
    </AppContainer>
  );
}
