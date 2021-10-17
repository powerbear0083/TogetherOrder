import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import store from './Store/Store'
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
    <Provider
        store={store}
    >
        <App />
    </Provider>, 
    document.getElementById("app")
)