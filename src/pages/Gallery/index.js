import React, { useEffect } from "react";
import { GalleryH3 } from "./GalleryElements";
import ImgGallery from "../../components/ImgGallery";

export default function Gallery() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <GalleryH3>Gallery</GalleryH3>
      <ImgGallery />
    </>
  );
}
