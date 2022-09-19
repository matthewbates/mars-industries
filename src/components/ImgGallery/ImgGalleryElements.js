import styled from "styled-components";

export const ImgGalleryContainer = styled.div``;

export const ImgGalleryWrapper = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;

  &::after {
    content: "";
    flex-basis: 350px;
  }
`;

export const ImgGalleryUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 25px;

  &::after {
    content: "";
    flex-basis: 350px;
  }
`;

export const ImgGalleryLi = styled.li`
  flex-basis: 350px;
  width: 350px;
  list-style: none;
  position: relative;
  cursor: pointer;

  &:hover .overlay {
    transform: scale(1);
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
`;

export const ImgGallerySpan = styled.span``;

export const ImgGalleryBtn = styled.button`
  --b: 4px;
  width: 40px;
  aspect-ratio: 1;
  background: conic-gradient(
      from 90deg at var(--b) var(--b),
      #000 90deg,
      #fff 0
    )
    calc(100% + var(--b) / 2) calc(100% + var(--b) / 2) / calc(50% + var(--b))
    calc(50% + var(--b));
  display: inline-block;
`;
