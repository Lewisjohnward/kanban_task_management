import {useState} from "react"
import styled from "styled-components"
import {useContext} from "react"
import {ThemeContext} from "styled-components"
import {Wrapper, Container, TitleContainer, Ico, Title, SubTitle, BoardContainer, Board, NewBoardContainer, Toggles, ThemeChangerContainer, SunIco, ToggleContainer, Toggle, MoonIco} from "./NavBar.styles.js"


const NavBar = () => {
    return (
        <Wrapper>
            <Container>
                <TitleContainer>
                    <Ico />
                    <Title>Kanban</Title>
                </TitleContainer>
                <SubTitle>All boards (4)</SubTitle>


                <BoardContainer current>
                    <Ico />
                    <Board>Platform Launch </Board>
                </BoardContainer>

                <BoardContainer>
                    <Ico />
                    <Board>Marketing Plan</Board>
                </BoardContainer>

                <BoardContainer>
                    <Ico />
                    <Board>RoadMap</Board>
                </BoardContainer>

                <NewBoardContainer>
                    <Ico />
                    <Board>+ Create New Board</Board>
                </NewBoardContainer>

            </Container>

            <Toggles>

                <ThemeToggle />

            </Toggles>

        </Wrapper>
    )
}

const ThemeToggle = () => {
    const {toggleTheme, darkTheme} = useContext(ThemeContext)

    return (
        <ThemeChangerContainer>
            <SunIco/>
            <ToggleContainer darkTheme={darkTheme} onClick={() => toggleTheme()}>
                <Toggle darkTheme={darkTheme}/>
            </ToggleContainer>
            <MoonIco/>
        </ThemeChangerContainer>
    )
}

export default NavBar
