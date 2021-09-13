import * as React from 'react'
import styled from "styled-components";
import { colors } from '../../Styled/Constant'
import { Button } from "../../Styled/Button"
import { Label } from "../../Component/Label"
import { Input } from "../../Component/Input"
import { PasswordInput } from "../../Component/PasswordInput"
import { signUpApi } from '../../Api/Index'


function SignUp() {
    const [orderName, setOrderName] = React.useState('')
    const [password, setPassword] = React.useState('')
    async function onClick() {
        const signUpFields = {
            name: orderName,
            password
        } 
        try {
            const a = await signUpApi( signUpFields )
            console.log('a', a)
        }
        catch (error) {
            console.log('error', error)
        }

    }

    return (
        <SignWrap className="layout-mobile p-right-8 p-left-8">
            <h1 className="fz32-bold text-center">一起訂</h1>
            <div className="form-group">
                <Label htmlFor="orderName">訂單名稱</Label>
                <Input 
                    id="orderName"
                    placeholder="請輸入訂單名稱"
                    value={orderName}
                    onChange={(e): void => setOrderName(e.target.value)}
                />
            </div>
            <div className="form-group">
                <Label htmlFor="orderPassword">訂單密碼</Label>
                <PasswordInput 
                    id={`orderPassword`}
                    type={`password`}
                    placeholder="請輸入密碼"
                    value={password}
                    onChange={(e): void => setPassword(e.target.value)}
                />
            </div>
            <Confirm
                onClick={onClick}    
                className="col-12"
            >開使訂</Confirm>
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