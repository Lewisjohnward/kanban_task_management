import GlobalStyle from "./GlobalStyles"
import {ThemeProvider} from "styled-components"
import Home from "./pages/Home"

const theme = {
    white: "#ffffff",
    darkgray: "#3b3b3b",
    lightgray: "#494949",
    lightergray: "#888888",
    purple: "#8c68ed",
    blue: "#9cf0f7",
    green: "#5bf5a3"
}

function App() {
    return (
        <>
            <ThemeProvider theme={theme}>
            <GlobalStyle />
                <Home />
            </ThemeProvider>
        </>
    );
}

export default App;
