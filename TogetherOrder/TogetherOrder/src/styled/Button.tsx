import styled from "styled-components";
import { fontFamily, colors } from './Constant'
import { pxToRem, hexToRgba } from './Helper'

type ButtonProps = {
    type: string
}

export const Button = styled.button`
  display: inline-block;
  font-weight: bold;
  line-height: 1.5;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  background-color: transparent;
  border: ${pxToRem(1)} solid transparent;
  border-radius: ${pxToRem(6)};
  padding: ${pxToRem(8)};
  color: ${colors.white};
  &:hover {
    background-color: ${hexToRgba(colors.primary, .8)};
  }
`