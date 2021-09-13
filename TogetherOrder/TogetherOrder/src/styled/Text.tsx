import { css } from 'styled-components'

/**
 * @description 控制內文對齊、置中
 */

type TextType = {
    'text-left': string,
    'text-center': string,
    'text-right': string
}
const TextProperty:TextType = {
    'text-left': 'left',
    'text-center': 'center',
    'text-right': 'right'
}
const Text = css`
  ${
    Object.entries(TextProperty).map(([key, value]) => css`
        .${key} {
            text-align: ${value}
        }
    `)
}
  
`

export default Text