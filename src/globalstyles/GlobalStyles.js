import {createGlobalStyle} from "styled-components"
import {ThemeProvider} from "styled-components"


const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        outline: none;
        border: none;
        white-space: nowrap;
    }

    body{
        font-family: 'Lato', sans-serif;
        background: ${({theme}) => theme.darkgray};
        color: ${({theme}) => theme.white};
    }

    button{
        color: ${({theme}) => theme.white};
    }
`

export default GlobalStyle
