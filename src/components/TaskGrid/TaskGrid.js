import {Container, AddNewColumn, Text, ColumnStyled, ColumnHeader, Dot, ColumnName, TaskStyled, TaskName, Subtasks} from "./TaskGrid.styles"



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
