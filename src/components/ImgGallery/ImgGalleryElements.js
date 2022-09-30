import styled from "styled-components";

export const ImgGalleryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 2rem;
  margin-bottom: 2rem;
  margin-left: 2rem;
  margin-right: 2rem;

  &::after {
    content: "";
    flex-grow: 999;
  }
`;

export const ImgGalleryLi = styled.li`
  display: flex;
  height: 300px;
  cursor: pointer;
  position: relative;
  list-style: none;
  flex-grow: 1;
  flex: 1 1 auto;
  overflow: hidden;

  &:hover .overlay {
    transform: scale(1);
    height: 100%;
  }
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
  background: black;
  opacity: 0.9;
  top: 0;
  left: 0;
  transform: scale(0);
  transition: 0.3s ease-in;
  color: #fff;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImgGallerySpan = styled.span`
  font-family: "Lato";
  font-size: 24px;

  &:hover {
    text-decoration: underline;
  }
`;

export const ImgLinkText = styled.h3`
  font-family: "Lato";
`;
