import styled from "styled-components";
import { Input } from './Input'

type passwordProps = {
    type: string
}

export const PasswordInput = styled(Input).attrs<passwordProps>( props => ({
    type: 'password'
}))``                          