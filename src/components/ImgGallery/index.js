import React from "react";
import {
  ImgGalleryContainer,
  ImgGalleryUl,
  ImgGalleryLi,
  ImgGalleryImg,
  ImgGalleryOverlay,
  ImgGallerySpan,
} from "./ImgGalleryElements";
import { imageGallery, slides } from "./data";

export default function ImageGallery() {
  return (
    <ImgGalleryContainer>
      <ul
        style={{
          listStyle: "none ",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "15px",
        }}
      >
        {imageGallery.map((item, index) => (
          <ImgGalleryLi key={index}>
            <ImgGalleryImg src={item.img} alt={item.alt} />
            <ImgGalleryOverlay>
              <ImgGallerySpan>{item.title}</ImgGallerySpan>
            </ImgGalleryOverlay>
          </ImgGalleryLi>
        ))}
      </ul>
    </ImgGalleryContainer>
  );
}
