import React, { useState, useEffect } from "react";
import {
  ImgGalleryContainer,
  ImgGalleryLi,
  ImgGalleryImg,
  ImgGalleryOverlay,
  ImgLinkText,
} from "./ImgGalleryElements";
import { imageGallery } from "./data";
import Loader from "../Loader";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function ImageGallery() {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <>
      <ImgGalleryContainer>
        {imageGallery.map((item, index) => (
          <ImgGalleryLi key={index}>
            {/* <ImgGalleryImg src={item.img} alt={item.alt} /> */}
            <LazyLoadImage
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
                verticalAlign: "middle",
                borderRadius: "5px",
              }}
              src={item.img}
            />
            <ImgGalleryOverlay className="overlay">
              <ImgLinkText>View Project</ImgLinkText>
            </ImgGalleryOverlay>
          </ImgGalleryLi>
        ))}
      </ImgGalleryContainer>
    </>
  );
}
