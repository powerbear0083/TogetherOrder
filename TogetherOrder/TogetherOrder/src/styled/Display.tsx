import { css } from 'styled-components'

type DisplayType = {
    'd-none': string,
    'd-inline': string,
    'd-inline-block': string,
    'd-block': string,
    'd-flex': string,
    'd-inline-flex': string
}
const displayProperty:DisplayType = {
    'd-none': 'none',
    'd-inline': 'inline',
    'd-inline-block': 'inline-block',
    'd-block': 'block',
    'd-flex': 'flex',
    'd-inline-flex': 'inline-flex'
}
const Display = css`
  ${
    Object.entries(displayProperty).map(([key, value]) => css`
        .${key} {
            display: ${value}
        }
    `)
  }
  
`

export default Display