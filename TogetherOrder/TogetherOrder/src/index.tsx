import * as React from "react";
import * as ReactDOM from "react-dom";
import SignUp from './Containers/Account/SignUp'
import GlobalStyle from "./Styled/GlobalStyle";


function App() {
    
    return (
        <React.Fragment>
            <GlobalStyle />
            <SignUp />
        </React.Fragment>
    )
    
}

ReactDOM.render(
    <App />, 
    document.getElementById("app")
)