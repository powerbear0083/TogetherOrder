import { createGlobalStyle, css } from "styled-components"
import Reset from "./Reset";
import Spacing from "./Spacing";
import Display from './Display'
import Typography from "./Typography";
import Text from "./Text";
import Layout from "./Layout";
import Form from "./Form";

const GlobalStyle = createGlobalStyle`
  ${Reset}
  ${Spacing}
  ${Display}
  ${Typography}
  ${Text}
  ${Layout}
  ${Form}
`
export default GlobalStyle