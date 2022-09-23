import React from "react";
import {
  ImgGalleryContainer,
  ImgGalleryLi,
  ImgGalleryImg,
  ImgGalleryOverlay,
  ImgLinkH3,
  ImgLinkWrapper,
} from "./ImgGalleryElements";
import { imageGallery } from "./data";
import { Link } from "react-router-dom";

export default function ImageGallery() {
  return (
    <ImgGalleryContainer>
      {imageGallery.map((item, index) => (
        <ImgGalleryLi key={index}>
          <ImgGalleryImg src={item.img} alt={item.alt} />
          <ImgGalleryOverlay className="overlay">
            <ImgLinkH3>Project Name</ImgLinkH3>
            <ImgLinkWrapper>
              <Link
                style={{ color: "white", textDecoration: "none" }}
                to={item.link}
                onClick={item.link}
              >
                View Project
              </Link>
            </ImgLinkWrapper>
          </ImgGalleryOverlay>
        </ImgGalleryLi>
      ))}
    </ImgGalleryContainer>
  );
}
