import * as React from 'react'
import styled from "styled-components";
import { Button } from "../styled/Button";

function SignUp() {
    function onClick(e: React.MouseEvent<HTMLButtonElement>) {
        console.log(e)
    }
    return (
        <SignWrap>
            <Headline>
                 一起訂
            </Headline>
            <div className="form-group">
                <label htmlFor="orderName">訂單名稱</label>
                <input id={`orderName`} type="text"/>
            </div>
            <div className="form-group">
                <label htmlFor="orderPassword">密碼</label>
                <input id={`orderPassword`} type="password"/>
            </div>
            <Confirm
                onClick={onClick}
            >開使訂</Confirm>
        </SignWrap>
    )
}

export default SignUp

const SignWrap = styled.div`
    width: 960px;
    margin-left: auto;
    margin-right: auto;
`
const Headline = styled.div`
    font-size: 20px;
    font-weight: bold;
`
const Confirm = styled(Button)`
  background-color: #ff8c00;
  color: #fff;
`;