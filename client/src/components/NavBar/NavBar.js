import {useState} from "react"
import styled from "styled-components"
import {useContext} from "react"
import {ThemeContext} from "styled-components"
import {Wrapper, Container, TitleContainer, Ico, Title, SubTitle, BoardContainer, Board, NewBoardContainer, Toggles, ThemeChangerContainer, SunIco, ToggleContainer, Toggle, MoonIco} from "./NavBar.styles.js"


const NavBar = ({boardData, setCreateNewBoard, currentBoard, setCurrentBoard}) => {
    const numberOfBoards = boardData.length
    return (
        <Wrapper>
            <Container>
                <TitleContainer>
                    <Ico />
                    <Title>Kanban</Title>
                </TitleContainer>
                <SubTitle>All boards ({numberOfBoards})</SubTitle>
                {boardData.map((board, i) => (
                    <BoardContainer 
                        onClick={() => setCurrentBoard(i)}
                        current={currentBoard === i}
                    >
                        <Ico />
                        <Board>{board.board}</Board>
                    </BoardContainer>
                ))}

                <NewBoardContainer onClick={() => setCreateNewBoard(true)}>
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
