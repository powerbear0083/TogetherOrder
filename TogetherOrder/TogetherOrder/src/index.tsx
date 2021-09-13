import * as React from "react";
import * as ReactDOM from "react-dom";
import SignUp from "./containers/SignUp";
import GlobalStyle from "./styled/GlobalStyle";


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