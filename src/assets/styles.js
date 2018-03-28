import styled, { css } from "styled-components";

const media = {
  tablet: (...args) => css`
    @media (min-width: 768px) {
      ${css(...args)};
    }
  `,
  laptop: (...args) => css`
    @media (min-width: 1024px) {
      ${css(...args)};
    }
  `
};

export const Container = styled.div`
`;

export const YelloBg = styled.div`
  position: absolute;
  background: #fddb00;
  height: 40vh;
  width: 100vw;
  z-index: -2;
  `
  
  export const Title = styled.h1`
  padding: 1rem 0;
  position: relative;
  font-size: 1.5rem;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 4px;
  
  span {
    background: #fddb00;
    padding: 0 1rem;
    z-index: 1;
  }

  :before {
    position: absolute;
    height: 5px;
    content: "";
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    background: black;
    width: 80%;
    max-width: 420px;
    z-index: -1;
  }
`;

export const Map = styled.div`
  margin: 0 auto;
  width: 63%;
  height: 50vh;
  border: 1px solid red;

  #map {
    width: 100%;
    height: 100%;

  }
`;

export const PhotoContainer = styled.div`
  position: relative;
  width: 60vw;
  margin-top: 10px;
  max-width: 100%; // scrollbar issue for Windows
  height: 180vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  
  ${media.tablet`
    width: 100vw;
    margin-top: 0;
    flex-wrap: nowrap;
    height: 33.3vw;
    max-height: 33.3%; // scrollbar issue for Windows
  `};
`;

export const Photo = styled.div`
  width: 100%;
  border: 1px solid red;
  box-sizing: border-box;
  
  #follow-us {
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    text-transform: uppercase;
    white-space: nowrap;
    padding: 1rem 2rem;
    background: white;
  }
  
  ${media.tablet`
  height: 100%;
  `};
  
`;