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

import image1 from "../../assets/gallery/img1.jpg";
import image2 from "../../assets/gallery/img2.jpg";
import image3 from "../../assets/gallery/img3.jpg";
import image4 from "../../assets/gallery/img4.jpg";
import image5 from "../../assets/gallery/img5.jpg";
import image6 from "../../assets/gallery/img6.jpg";
import image7 from "../../assets/gallery/img7.jpg";
import image8 from "../../assets/gallery/img8.jpg";

export default function ImageGallery() {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const imgs = [
      image1,
      image2,
      image3,
      image4,
      image5,
      image6,
      image7,
      image8,
    ];
    cacheImages(imgs);
  }, []);

  const cacheImages = async (imgs) => {
    const promises = await imgs.map((src) => {
      return new Promise(function (resolve, reject) {
        const img = new Image();

        img.src = src;
        img.onload = resolve();
        img.onerror = reject();
      });
    });
    await Promise.all(promises);
    setIsLoading(false);
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <ImgGalleryContainer>
          {imageGallery.map((item, index) => (
            <ImgGalleryLi key={index}>
              <ImgGalleryImg src={item.img} alt={item.alt} />
              <ImgGalleryOverlay className="overlay">
                <ImgLinkText>View Project</ImgLinkText>
              </ImgGalleryOverlay>
            </ImgGalleryLi>
          ))}
        </ImgGalleryContainer>
      )}
    </>
  );
}
