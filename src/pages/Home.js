import styled from "styled-components"
import Header from "../components/Header/Header"
import NavBar from "../components/NavBar/NavBar"
import TaskGrid from "../components/TaskGrid/TaskGrid"
import data from "../data/dummy.js"


const Container = styled.div`
    display: flex;
    flex-direction: row;
    height: 100vh;


`

const Main = styled.div`
    width: 100%;
`

const Box = styled.div`
    background: ${({theme}) => theme.darkgray};
`

 
const Home = () => {
    return (
        <Container>
            <NavBar />
            <Main>
                <Header data={data[0]}/>
                <TaskGrid data={data[0]}/>
            </Main>
        </Container>

    )
}

export default Home
