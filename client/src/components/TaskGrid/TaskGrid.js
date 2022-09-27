import {Container, AddNewColumn, Text, ColumnStyled, ColumnHeader, Dot, ColumnName, TaskStyled, TaskName, Subtasks} from "./TaskGrid.styles"



const TaskGrid = ({data, setAddNewColumn, setTaskDetailed}) => {
    const {columns} = data
    return (
        <>
            <Container>
                {columns.map(column => <Column column={column} setTaskDetailed={setTaskDetailed} />)}
                <AddNewColumn onClick={() => setAddNewColumn(true)}>
                    <Text>+ New Column</Text>
                </AddNewColumn>
            </Container>
        </>
    )
}



const Column = ({column, setTaskDetailed}) => {
    const tasks = column.tasks.length
    return (
        <ColumnStyled>
            <ColumnHeader>
                <Dot color={column.color}/>
                <ColumnName>{column.column}</ColumnName>
            </ColumnHeader>
            {column.tasks.map(task => <Task task={task} setTaskDetailed={setTaskDetailed} />)}
        </ColumnStyled>
    )
}


const Task = ({task, setTaskDetailed}) => {
    return (
        <TaskStyled onClick={() => setTaskDetailed(true)}>
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
