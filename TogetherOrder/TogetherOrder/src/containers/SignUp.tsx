import * as React from 'react'
import styled from "styled-components";
import { colors } from '../styled/Constant'
import { Button } from "../styled/Button";
import { Label } from "../component/Label";
import { Input } from "../component/Input";
import { PasswordInput } from "../component/PasswordInput";


function SignUp() {
    return (
        <SignWrap className="layout-mobile p-right-8 p-left-8">
            <h1 className="fz32-bold text-center">一起訂</h1>
            <div className="form-group">
                <Label htmlFor="orderName">訂單名稱</Label>
                <Input 
                    id="orderName"
                    placeholder="請輸入訂單名稱"
                />
            </div>
            <div className="form-group">
                <Label htmlFor="orderPassword">訂單名稱</Label>
                <PasswordInput 
                    id={`orderPassword`}
                    type={`password`}
                    placeholder="請輸入密碼"
                />
            </div>
            <Confirm>開使訂</Confirm>
        </SignWrap>
    )
}

export default SignUp

const SignWrap = styled.div`
    margin-top: 10%;
    margin-left: auto;
    margin-right: auto;
`
const Confirm = styled(Button)`
  background-color: ${colors.primary};

`;