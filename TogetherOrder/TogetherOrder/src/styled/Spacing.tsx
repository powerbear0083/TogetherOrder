import { css } from 'styled-components'
import { pxToRem } from './Helper'

const Spacing = css`
  ${
    [4, 8, 16, 24, 32].map( size => css`
        ${
            ['top', 'right', 'bottom', 'left'].map( direction => css`
              .m-${direction}-${size} {
                margin-${direction}: ${pxToRem(size)} !important;
              }
              .p-${direction}-${size} {
                padding-${direction}: ${pxToRem(size)} !important;
              }
        `)
        }
    `)
  }
`

export default Spacing