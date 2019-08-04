import styled from "styled-components";

export const HomeVideoContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  @media (max-width: 979px) {
    .selected-featured-stream {
      height: 40vh;
    }
  }
`;

export const ThumbnailContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 10px;
  bottom: 0;
  width: 100%;
`;

export const ThumbnailButton = styled.button`
  width: 16rem;
  max-width: 50%;
  margin: 0.3rem 0;
  cursor: pointer;
  border: 0;
  padding: 0;
  background: inherit;
  color: inherit;
  overflow: hidden;
`;

export const ThumbnailButtonImage = styled.img`
  width: 100%;
  height: 100%;

  &:hover {
    transition-duration: 0.5s;
    transform: scale(1.1);
  }
`;
