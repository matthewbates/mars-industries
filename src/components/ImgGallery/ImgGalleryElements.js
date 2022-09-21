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
  background: rgba(57, 57, 57, 0.8);
  top: 0;
  left: 0;
  transform: scale(0);
  transition: all 0.2s 0.1s ease-in-out;
  color: #fff;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImgGallerySpan = styled.span``;
