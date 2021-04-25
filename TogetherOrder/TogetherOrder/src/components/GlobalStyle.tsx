﻿import { createGlobalStyle } from "styled-components"
import { fontFamily } from '../styled/constant'


const ResetStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
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
    font-family: ${fontFamily};
    min-height: 100vh;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
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
`
export default ResetStyle