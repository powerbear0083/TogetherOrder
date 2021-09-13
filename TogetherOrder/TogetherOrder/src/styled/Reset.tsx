import { css } from 'styled-components'
import { fontFamily, fontSize, colors } from './Constant'
import { pxToRem, hexToRgba } from './Helper'

const Reset = css`
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
    font-size: ${pxToRem(fontSize.fz13)};
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
`

export default Reset