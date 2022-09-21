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

    padding: 0px 60px;

    background: ${({theme}) => theme.lightgray};
    border-radius: 5px;

    &:hover{
        cursor: pointer;
        outline: 1px solid ${({theme}) => theme.whiteOpac};
    }
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

const Dot = styled.div`
    width: 12px;
    height: 12px;
    border-radius: 8px;
    background: ${({color}) => color};
`

const ColumnHeader = styled.div`
    display: flex;
    align-items: center;
    margin-left: 10px;

    margin-bottom: 10px;

    > * {
        margin-right: 10px;
    }
`

const ColumnName = styled.div`
    text-transform: uppercase;
    opacity: 0.6;
    letter-spacing: 5px;
`

const Column = ({column}) => {
    const tasks = column.tasks.length
    return (
        <ColumnStyled>
            <ColumnHeader>
                <Dot color={column.color}/>
                <ColumnName>{column.column}</ColumnName>
            </ColumnHeader>
            {column.tasks.map(task => <Task task={task} />)}
        </ColumnStyled>
    )
}


const TaskStyled = styled.div`
    background: ${({theme}) => theme.lightgray};
    padding: 8px 60px;
    border-radius: 10px;
    margin-bottom: 10px;

    &:hover{
        cursor: pointer;
        transform: scale(1.01);
    }
`

const TaskName =  styled.h2`
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 5px;
`

const Subtasks = styled.h4`
    font-size: 0.8rem;
    font-weight: 800;
    opacity: 0.3;
`

const Task = ({task}) => {
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
