import * as React from 'react'
import styled from "styled-components";

type ContainerProps = {
    message: string;
}
function Container(
    {
        message = 'ccxxx'
    }: ContainerProps
) {
    return (
        <Wrap>
            {message}
        </Wrap>
    )
}

export default Container

const Wrap = styled.main`
  width: 1140px;
  margin-right: auto;
  margin-left: auto;
`