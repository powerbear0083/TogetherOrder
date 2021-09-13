import styled from "styled-components";
import { pxToRem } from "../styled/Helper"

type LabelProps = {
    htmlFor: string
}

export const Label = styled.label.attrs<LabelProps>( props => ({
    htmlFor: props.htmlFor ?  props.htmlFor : ''
}))`
  display: inline-block;
  margin-bottom: ${(pxToRem(4))};
`                          