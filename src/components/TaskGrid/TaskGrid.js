import styled from "styled-components"

const Container = styled.div`
    display: flex;
    color: white;
    height: 90%;
    margin-top: 10px;
    margin-left: 20px;

    > * {
        margin-right: 20px;
    }
`

const AddNewColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    padding: 0px 20px;

    background: ${({theme}) => theme.lightgray};
    border-radius: 5px;
`

const Text = styled.div`
`


const TaskGrid = ({data}) => {
    const {columns} = data
    return (
        <>
            <Container>
                {columns.map(column => <Column column={column} />)}
                <AddNewColumn>
                    <Text>+ New Column</Text>
                </AddNewColumn>
            </Container>
        </>
    )
}


const ColumnStyled = styled.div`
`

const Column = ({column}) => {
    return (
        <ColumnStyled>
            {column.column}
            {column.tasks.map(task => <Task task={task} />)}
        </ColumnStyled>
    )
}


const TaskStyled = styled.div`
    background: ${({theme}) => theme.lightgray};
    padding: 8px 35px;
    border-radius: 10px;
    margin-bottom: 10px;

    &:hover{
        cursor: pointer;
        transform: scale(1.01);
    }
`

const TaskName =  styled.h2`
    font-size: 1.1rem;
    margin-bottom: 5px;
`

const Subtasks = styled.h4`
    font-size: 0.8rem;
    font-weight: 300;
    opacity: 0.7;
`

const Task = ({task}) => {
    console.log(task.task.subtasks.length)

    return (
        <TaskStyled>
            <TaskName>
                {task.task.name}
            </TaskName>
            <Subtasks>
                0 of 3 subtasks
            </Subtasks>
        </TaskStyled>
    )
}

export default TaskGrid
