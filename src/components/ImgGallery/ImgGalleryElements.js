import styled from "styled-components";

export const ImgGalleryContainer = styled.div``;

export const ImgGalleryUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;

  &::after {
    content: "";
    flex-basis: 350px;
  }
`;

export const ImgGalleryLi = styled.li`
  flex-basis: 350px;
  position: relative;
  cursor: pointer;
`;

export const ImgGalleryImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  vertical-align: middle;
  border-radius: 5px;
`;

export const ImgGalleryOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(57, 57, 57, 0.502);
  top: 0;
  left: 0;
  transform: scale(0);
  transition: all 0.2s 0.1s ease-in-out;
  color: #fff;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: scale(1);
  }
`;

export const ImgGallerySpan = styled.span``;
