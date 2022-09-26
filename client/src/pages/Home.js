import {useState} from "react"
import styled from "styled-components"
import Header from "../components/Header/Header"
import NavBar from "../components/NavBar/NavBar"
import TaskGrid from "../components/TaskGrid/TaskGrid"
import data from "../data/dummy.js"
import {Modal} from "../components/Modal/Modal"
import {CreateNewBoard} from "../components/NewBoard/NewBoard"
import {AddNewTask} from "../components/AddNewTask/AddNewTask"


const Container = styled.div`
    display: flex;
    flex-direction: row;
    height: 100vh;
`

const Main = styled.div`
    width: 100vw;
`

const Home = () => {
    const [createNewBoard, setCreateNewBoard] = useState(false)
    const [addNewTask, setAddNewTask] = useState(true)

    return (

        <>
            <Modal>
                { createNewBoard && <CreateNewBoard setCreateNewBoard={setCreateNewBoard} /> }
                { addNewTask && <AddNewTask setAddNewTask={setAddNewTask} /> }
            </Modal>

            <Container>
                <NavBar setCreateNewBoard={setCreateNewBoard} />
                <Main>
                    <Header data={data[0]} setAddNewTask={setAddNewTask} />
                    <TaskGrid data={data[0]}/>
                </Main>
            </Container>
        </>

    )
}

export default Home
