import React from "react";
import {
  ImgGalleryContainer,
  ImgGalleryLi,
  ImgGalleryImg,
  ImgGalleryOverlay,
  ImgLinkWrapper,
} from "./ImgGalleryElements";
import { imageGallery } from "./data";
import { Link, Routes, Route } from "react-router-dom";

export default function ImageGallery() {
  return (
    <ImgGalleryContainer>
      {imageGallery.map((item, index) => (
        <ImgGalleryLi key={index}>
          <ImgGalleryImg src={item.img} alt={item.alt} />
          <ImgGalleryOverlay className="overlay">
            <ImgLinkWrapper>
              {/* <Routes>
                <Route to="gallery/:id" element={<ImgGalleryList />} />
              </Routes> */}
              <Link
                style={{ color: "white", textDecoration: "none" }}
                to={item.link}
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
