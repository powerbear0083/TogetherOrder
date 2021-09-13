import { css } from 'styled-components'
import { breakpoint } from './Constant'

const Layout = css`
    ${
        Object.entries(breakpoint).map(([key, value]) => css`
            .layout-${key} {
              width: ${value}px;
              margin-left: auto;
              margin-right: auto;
            }
        `)
    }
`

export default Layout


