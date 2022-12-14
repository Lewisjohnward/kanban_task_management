import {useState, useEffect} from "react"
import styled from "styled-components"
import Header from "../components/Header/Header"
import NavBar from "../components/NavBar/NavBar"
import TaskGrid from "../components/TaskGrid/TaskGrid"
import data from "../data/dummy.js"
import {Modal} from "../components/Modal/Modal"
import {CreateNewBoard} from "../components/NewBoard/NewBoard"
import {AddNewTask} from "../components/AddNewTask/AddNewTask"
import {NewColumn} from "../components/NewColumn/NewColumn"
import {TaskDetailed} from "../components/TaskDetailed/TaskDetailed"

import {UseGetBoards} from "../utils/fetch"


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
    const [addNewTask, setAddNewTask] = useState(false)
    const [addNewColumn, setAddNewColumn] = useState(false)
    const [taskDetailed, setTaskDetailed] = useState(false)

    const [currentBoard, setCurrentBoard] = useState(0)

    const boardData = UseGetBoards()

    if(!boardData) return null

    console.log(boardData)

    return (

        <>
            <Modal>
                { createNewBoard && <CreateNewBoard setCreateNewBoard={setCreateNewBoard} /> }
                { addNewTask && <AddNewTask setAddNewTask={setAddNewTask} /> }
                { addNewColumn && <NewColumn setAddNewColumn={setAddNewColumn} /> }
                { taskDetailed && <TaskDetailed setTaskDetailed={setTaskDetailed} /> }
            </Modal>

            <Container>
                <NavBar 
                    setCreateNewBoard={setCreateNewBoard} 
                    setCurrentBoard={setCurrentBoard}
                    currentBoard={currentBoard}
                    boardData={boardData}
                />
                <Main>
                    <Header 
                        data={boardData[currentBoard]}
                        setAddNewTask={setAddNewTask}
                    />
                    <TaskGrid
                        setTaskDetailed={setTaskDetailed}
                        setAddNewColumn={setAddNewColumn}
                        data={boardData[currentBoard]}
                    />
                </Main>
            </Container>
        </>

    )
}

export default Home
