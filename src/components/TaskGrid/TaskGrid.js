import styled from "styled-components"

const Container = styled.div`
    color: black;
    display: flex;
    color: white;
`



const TaskGrid = ({data}) => {
    const {columns} = data
    return (
        <Container>
            {columns.map(column => <Column column={column} />)}
        </Container>
    )
}

const ColumnStyled = styled.div`
    
`

const Column = ({column}) => {
    return (
        <div>
            {column.column}
            {column.tasks.map(task => <Task task={task} />)}
        </div>
    )
}


const TaskStyled = styled.div`
    background: ${({theme}) => theme.lightgray};
    padding: 10px 25px;
    border-radius: 10px;
    margin-bottom: 10px;
`

const Task = ({task}) => {

    return (
        <TaskStyled>
            {task.task.name}
        </TaskStyled>
    )
}

export default TaskGrid
