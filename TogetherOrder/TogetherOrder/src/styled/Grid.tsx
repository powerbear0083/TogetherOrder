import { css } from 'styled-components'



function generateCols():number[] {
    let result: number[] = []
    for(let i = 1; i < 13; i++) {
        result.push(i)
    }
    return result
}

const Grid = css`
  ${
    generateCols().map( (col) => css`
        .col-${col} {
          width: ${(col / 12) * 100}%;
        }
    `)
  }
`

export default Grid