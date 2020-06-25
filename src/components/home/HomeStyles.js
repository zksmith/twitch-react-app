import styled from "styled-components";

export const HomeVideoContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  flex-direction: column;
  margin: 6% auto 0 auto;
  width: 90%;

  p {
    margin: 5px 0;
  }
  a {
    text-decoration: underline;
  }

  @media (max-width: 979px) {
    .selected-featured-stream {
      height: 40vh;
    }
  }
`;

export const ThumbnailContainer = styled.section`
  display: flex;
  margin-top: 10px;
  bottom: 0;
  width: 100%;
  justify-content: center;
  @media (max-width: 979px) {
    flex-wrap: wrap;
  }
`;

export const ThumbnailButton = styled.button`
  width: 12rem;
  max-width: 50%;
  margin: 0.3rem 2px;
  cursor: pointer;
  border: 0;
  padding: 0;
  background: inherit;
  color: inherit;
  overflow: hidden;
  outline: none;
`;

export const ThumbnailButtonImage = styled.img`
  width: 100%;
  height: 100%;

  &:hover {
    transition-duration: 0.5s;
    transform: scale(1.1);
  }
  ${(props) => (props.selected ? "" : "filter: grayscale(100%)")}
  ${(props) => (props.selected ? "border: 3px solid" : "")}
`;
