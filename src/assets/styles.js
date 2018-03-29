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
  height: 35vh;
  width: 100vw;
  max-width: 100%;
  z-index: -2;
  `
  
  export const Title = styled.h1`
  padding: 1.5rem 0;
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

export const MapContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 50vh;
  
  #map {
    width: 100%;
    height: 100%;
  }
  
  ${media.tablet`
    width: 63%;
  `};
`;

export const PhotoContainer = styled.div`
  position: relative;
  width: 60vw;
  margin: 10px auto 0;
  max-width: 100%; // scrollbar issue for Windows
  height: 180vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  #follow-us {
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    text-transform: uppercase;
    white-space: nowrap;
    padding: 1rem 2rem;
    background: white;
    transition: all .4s;
    color: black;
    
    &:hover {
      background: #fddb00;
      color: white;
    }
  }

  ${media.tablet`
    width: 100vw;
    margin-top: 0;
    flex-wrap: nowrap;
    height: 33.3vw;
    max-height: 33.3%;
  `};
`;

export const Photo = styled.img`
  width: 100%;
  box-sizing: border-box;
  height: 33.333%;
  
  ${media.tablet`
  width: 33.333%;
  height: auto;
  `};
  
`;
