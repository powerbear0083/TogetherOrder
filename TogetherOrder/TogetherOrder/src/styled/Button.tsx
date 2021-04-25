import styled from "styled-components";
import { fontFamily } from './constant'

export const Button = styled.button`
  display: inline-block;
  font-family: ${fontFamily};
  font-weight: bold;
  line-height: 1.5;
  color: #323232;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
`