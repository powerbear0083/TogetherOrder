import { css } from 'styled-components'



function generateCols():number[] {
    let result: number[] = []
    for(let i = 1; i < 13; i++) {
        result.push(i)
    }
    return result.reverse()
}

const Grid = css`
  ${
    generateCols().map( size => css`
        ${

        }
    `)
  }
`

export default Grid