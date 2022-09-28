import GlobalStyle from "./globalstyles/GlobalStyles"
import {useState} from "react"
//import theme from "./globalstyles/theme"
import {ThemeProvider} from "styled-components"
import Home from "./pages/Home"

const darkerTheme = {
    white: "#ffffff",
    darkgray: "#3b3b3b",
    lightgray: "#494949",
    lightergray: "#888888",
    purple: "#8c68ed",
    blue: "#9cf0f7",
    green: "#5bf5a3",

    whiteOpac: "rgba(255, 255, 255, 0.2)"
}
  
const lighterTheme = {
    white: "#000000",
    darkgray: "#DDDDDD",
    lightgray: "#FFFFFF",
    lightergray: "#EEEEEE",
    purple: "#8c68ed",
    blue: "#9cf0f7",
    green: "#5bf5a3",

    whiteOpac: "rgba(255, 255, 255, 0.2)"
}


function App() {
    const [darkTheme, setDarkTheme] = useState(true)

    const toggleTheme = () => setDarkTheme(prev => !prev)

    const theme = darkTheme ? darkerTheme : lighterTheme

    //This appends the method toggle theme to the theme context
    theme.toggleTheme = toggleTheme
    theme.darkTheme = darkTheme

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Home />
        </ThemeProvider>
    );
}

export default App;
