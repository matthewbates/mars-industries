import React from "react";
import {
  ImgGalleryContainer,
  ImgGalleryLi,
  ImgGalleryImg,
  ImgGalleryOverlay,
  ImgGallerySpan,
} from "./ImgGalleryElements";
import { imageGallery } from "./data";

export default function ImageGallery() {
  return (
    <ImgGalleryContainer>
      {imageGallery.map((item, index) => (
        <ImgGalleryLi key={index}>
          <ImgGalleryImg src={item.img} alt={item.alt} />
          <ImgGalleryOverlay className="overlay">
            <ImgGallerySpan></ImgGallerySpan>
          </ImgGalleryOverlay>
        </ImgGalleryLi>
      ))}
    </ImgGalleryContainer>
  );
}
