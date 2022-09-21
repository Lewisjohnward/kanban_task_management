import GlobalStyle from "./globalstyles/GlobalStyles"
import theme from "./globalstyles/theme"
import {ThemeProvider} from "styled-components"
import Home from "./pages/Home"


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
