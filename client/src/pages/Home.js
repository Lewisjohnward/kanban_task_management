import styled from "styled-components"
import Header from "../components/Header/Header"
import NavBar from "../components/NavBar/NavBar"
import TaskGrid from "../components/TaskGrid/TaskGrid"
import data from "../data/dummy.js"
import {Modal} from "../components/Modal/Modal"
import {CreateNewBoard} from "../components/NewBoard/NewBoard"


const Container = styled.div`
    display: flex;
    flex-direction: row;
    height: 100vh;
`

const Main = styled.div`
    width: 100vw;
`

const Home = () => {
    return (

        <>
            <Modal>
                <CreateNewBoard />
            </Modal>

            <Container>
                <NavBar />
                <Main>
                    <Header data={data[0]}/>
                    <TaskGrid data={data[0]}/>
                </Main>
            </Container>
        </>

    )
}

export default Home
