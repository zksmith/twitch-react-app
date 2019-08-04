import styled from "styled-components";

export const GameCardContainer = styled.div`
  width: 12rem;
  max-width: 50%;
  margin: 10px 0;

  img {
    width: 100%;
  }

  h3 {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin: 0;
    margin-top: 0.2rem;
  }

  p {
    margin: 0.3rem 0 0 0;
  }
`;
