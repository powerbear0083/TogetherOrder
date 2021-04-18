import * as React from "react";
import * as ReactDOM from "react-dom";
import Container from "./containers/Container";
import GlobalStyle from "./components/GlobalStyle";


function App() {
    
    return (
        <React.Fragment>
            <GlobalStyle />
            <Container
                message={`aaa`}
            />
        </React.Fragment>
    )
    
}

ReactDOM.render(
    <App />, 
    document.getElementById("app")
)