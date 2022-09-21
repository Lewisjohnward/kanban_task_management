import styled from "styled-components"
import {TbLayoutBoardSplit} from "react-icons/tb"
import {BsFillSunFill, BsFillMoonStarsFill} from "react-icons/bs"
import {AiFillEyeInvisible} from "react-icons/ai"


const Wrapper = styled.div`
    width: 20%;
    background: ${({theme}) => theme.lightgray};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px 0px;
    border-right: 1px solid ${({theme}) => theme.lightergray};
`

const Container = styled.div`
    padding: 10px 15px 0px 0px;

    > * {
        padding-left: 20px;
    }
`
  
const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;

    > * {
        margin-right: 10px;
    }
`

const Title = styled.h1`
    font-size: 1.5em;
    font-weight: 900;
`

const SubTitle = styled.h2`
    margin-bottom: 10px;

    font-size: 1em;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 2px;
    opacity: 0.7;

`

const hoverTransition = `
    &:hover{
        cursor: pointer;
        transform: translateX(5px);
        transition: all 0.1s;
    }
`

const BoardContainer = styled.div`
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


const Board = styled.h3`
    font-size: 1em;
    padding-right: 10px;
`

const NewBoardContainer = styled(BoardContainer)`
    color: ${({theme}) => theme.purple};
`

const Ico = styled(TbLayoutBoardSplit)`

`



const ThemeChangerContainer = styled.div`
    background: ${({theme}) => theme.darkgray};
    display: flex;
    align-items: center;
    justify-content: center;

    > * {
        margin: 10px ;
    }
`
const SunIco = styled(BsFillSunFill)``

const MoonIco = styled(BsFillMoonStarsFill)``

const ToggleContainer = styled.div`
    background: ${({theme}) => theme.purple};
    width: 30px;
    height: 15px;
    border-radius: 10px;

    &:hover{
        cursor: pointer;
    }
`

const Toggle = styled.div`
    background: white;
    height: 99%;
    width: 49%;
    border-radius: 50px;

    transform: translateX(100%);
`
const Settings = styled.div`
    margin: 0px 20px;

    > * {
        margin-bottom: 10px;
    }
`

const SideBarToggleContainer = styled.div`
    display: flex;
    align-items: center;
    > * {
        margin-right: 10px;
    }

    &:hover{
        cursor: pointer;
    }
`

const SideBarToggle = styled.div`

`
const EyeIco = styled(AiFillEyeInvisible)`
    
`

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

            <Settings>
            <ThemeChangerContainer>
                <SunIco/>
                <ToggleContainer>
                    <Toggle />
                </ToggleContainer>
                <MoonIco/>
            </ThemeChangerContainer>

                <SideBarToggleContainer>
                    <EyeIco />
                    <SideBarToggle>Hide sidebar</SideBarToggle>
                </SideBarToggleContainer>
            </Settings>

        </Wrapper>
    )
}

export default NavBar
