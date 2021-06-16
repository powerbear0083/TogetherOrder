import * as React from 'react'
import styled from "styled-components";
import { colors } from '../styled/Constant'
import { Button } from "../styled/Button";
import { Input } from "../styled/Input";


function SignUp() {
    return (
        <SignWrap>
            <h1 className="fz32-bold text-center">一起訂</h1>
            <div className="form-group">
                <label htmlFor="orderName">訂單名稱</label>
                <Input />
            </div>
            <div className="form-group">
                <label htmlFor="orderPassword">密碼</label>
                <input id={`orderPassword`} type="password"/>
            </div>
            <Confirm>開使訂</Confirm>
        </SignWrap>
    )
}

export default SignUp

const SignWrap = styled.div`
    width: 480px;
    margin-top: 10%;
    margin-left: auto;
    margin-right: auto;
`
const Confirm = styled(Button)`
  background-color: ${colors.primary};
  color: ${colors.white};
`;