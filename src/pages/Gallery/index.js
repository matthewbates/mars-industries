import React, { useEffect } from "react";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ImgGallery from "../../components/ImgGallery";

export default function Gallery() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Header />
      <Navbar />
      <ImgGallery />
      <Footer />
    </>
  );
}
