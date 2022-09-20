import {createGlobalStyle} from "styled-components"


const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body{
        font-family: 'Lato', sans-serif;
        background: ${({theme}) => theme.darkgray};
        color: ${({theme}) => theme.white};
    }
`

export default GlobalStyle
