import { createGlobalStyle, css } from "styled-components"
import { fontFamily, fontSize, colors, textAlignment } from './Constant'
import { pxToRem, hexToRgba } from "./Helper"


const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  html {
    font-size: 625%;
  }
  ul[class],
  ol[class] {
    list-style: none;
    padding: 0;
  }
  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul[class],
  ol[class],
  li,
  figure,
  figcaption,
  blockquote,
  dl,
  dd {
    margin: 0;
  }
  body {
    background-color: ${hexToRgba(colors.primary, .1)};
    font-family: ${fontFamily};
    min-height: 100vh;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
    font-size: ${pxToRem(fontSize.fz13)}rem;
    color: ${colors.secondary};
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: unset;
    font-weight: unset;
  }
  a:not([class]) {
    text-decoration-skip-ink: auto;
  }
  img {
    max-width: 100%;
    display: block;
  }
  input,
  button,
  textarea,
  select {
    font: inherit;
  }
  ${
    [4, 8, 16, 24, 32].map( size => css`
      ${
        ['top', 'right', 'bottom', 'left'].map( direction => css`
          .m${direction[0]}-${size} {
            margin-${direction}: ${pxToRem(size)}rem; 
            padding-${direction}: ${pxToRem(size)}rem;
          }
        `)
      }
    `)
  }
  
  ${
    Object.entries(fontSize).map(([key, value]) => css`
      .${key} {
        font-size: ${pxToRem(value)}rem;
      }
      .${key}-bold {
        font-size: ${pxToRem(value)}rem;
        font-weight: bold;
      }
    `)
  }
  
  ${
    Object.entries(textAlignment).map(([key, value]) => css`
      .${key} {
        text-align: ${value};
      }
    `)
  }
`
export default GlobalStyle