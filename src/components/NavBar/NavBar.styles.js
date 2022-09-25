import styled from "styled-components"
import {TbLayoutBoardSplit} from "react-icons/tb"
import {BsFillSunFill, BsFillMoonStarsFill} from "react-icons/bs"

export const Wrapper = styled.div`
    width: 300px;
    background: ${({theme}) => theme.lightgray};
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px 0px;
    border-right: 1px solid ${({theme}) => theme.whiteOpac};
`

export const Container = styled.div`
    padding: 10px 15px 0px 0px;

    > * {
        padding-left: 20px;
    }
`

export const TitleContainer = styled.div`
display: flex;
align-items: center;
margin-bottom: 20px;

> * {
margin-right: 10px;
}
`

export const Title = styled.h1`
font-size: 1.5em;
font-weight: 900;
`

export const SubTitle = styled.h2`
margin-bottom: 10px;

font-size: 1em;
font-weight: 500;
text-transform: uppercase;
letter-spacing: 2px;
opacity: 0.7;

`

export const hoverTransition = `
&:hover{
cursor: pointer;
transform: translateX(5px);
transition: all 0.1s;
}
`

export const BoardContainer = styled.div`
display: flex;
align-items: center;

background: ${({current, theme}) => current ? theme.purple : "none"};
border-radius: 0px 25px 25px 0px;

padding: 10px 0px 10px 20px;

> * {
    margin-right: 10px;
        }

            ${({current}) => !current && hoverTransition}

            `


export const Board = styled.h3`
font-size: 1em;
padding-right: 10px;
`

export const NewBoardContainer = styled(BoardContainer)`
color: ${({theme}) => theme.purple};
`

export const Ico = styled(TbLayoutBoardSplit)`

`



export const Toggles = styled.div`
margin: 0px 20px;

> * {
margin-bottom: 10px;
}
`

export const ThemeChangerContainer = styled.div`
    background: ${({theme}) => theme.darkgray};
    display: flex;
    align-items: center;
    justify-content: center;

    > * {
        margin: 10px ;
    }
`

export const SunIco = styled(BsFillSunFill)``

export const MoonIco = styled(BsFillMoonStarsFill)``

export const ToggleContainer = styled.div`
    background: ${({darkTheme, theme}) => theme.purple};
    opacity: ${({darkTheme, theme}) => darkTheme ? "0.8" : "0.2"};
    width: 30px;
    height: 15px;
    border-radius: 10px;

    &:hover{
        cursor: pointer;
    }
`

export const Toggle = styled.div`
    background: white;
    height: 99%;
    width: 49%;
    border-radius: 50px;

    transform: ${({darkTheme}) => darkTheme ? "translateX(100%)" : "translateX(0%)"};
`


