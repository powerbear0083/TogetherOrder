import styled from "styled-components";
import { colors } from './Constant'
import { pxToRem, hexToRgba } from "./Helper"

export const Input = styled.input`
  display: block;
  width: 100%;
  height: ${pxToRem(38)}rem;
  padding: ${pxToRem(12)}rem;
  line-height: 1.5;
  color: ${colors.primary};
  background-color: ${hexToRgba(colors.secondary, .1)};
  border: 1px solid ${hexToRgba(colors.secondary, .1)};
  border-radius: ${pxToRem(6)}rem;
  &:focus {
    //border: 1px solid ${hexToRgba(colors.secondary, .2)};
    background-color: #fff;
    border-color: #80bdff;
    outline: 0;
    box-shadow: 0 0 0 .2rem rgba(0,123,255,.25);
  }
`                          