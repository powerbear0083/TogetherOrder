import { css } from 'styled-components'
import { fontSize } from "./Constant";
import { pxToRem } from "./Helper";

const Typography = css`
    ${
        Object.entries(fontSize).map(([key, value]) => css`
          .${key} {
            font-size: ${pxToRem(value)};
          }
          .${key}-bold {
            font-size: ${pxToRem(value)};
            font-weight: bold;
          }
        `)
    }
`
export default Typography