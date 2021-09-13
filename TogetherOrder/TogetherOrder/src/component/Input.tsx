import styled from "styled-components";
import { colors } from '../styled/Constant'
import { pxToRem, hexToRgba } from "../styled/Helper"

type InputProps = {
    id: string,
    type: string
}

export const Input = styled.input.attrs<InputProps>( props => ({
    id: props.id ? props.id : '',
    type: props.type ? props.type : 'text'
}))`
  display: block;
  width: 100%;
  height: ${pxToRem(38)};
  padding: ${pxToRem(12)};
  line-height: 1.5;
  color: ${colors.secondary};
  background-color: ${hexToRgba(colors.secondary, .1)};
  border: 1px solid ${hexToRgba(colors.secondary, .1)};
  border-radius: ${pxToRem(6)};
  &:focus {
    background-color: ${colors.white};
    border-color: ${hexToRgba(colors.primary, .1)};
    outline: 0;
    box-shadow: 0 0 0 ${pxToRem(2)} ${hexToRgba(colors.secondary, .5)};
  }
`                          