const mongoose = require('mongoose')


const SubTaskSchema = new mongoose.Schema({
    subtask: String,
    completed: Boolean
})

const TaskSchema = new mongoose.Schema({
    name: String,
    subtasks: [SubTaskSchema]
})

const ColumnSchema = new mongoose.Schema({
    name: {
        type: String
    },
    color: {
        type: String
    },
    tasks: [TaskSchema]
})

const BoardSchema = new mongoose.Schema({
    username: String,
    board: {
        type: String
    },
    columns: [ColumnSchema]
})

const Board = mongoose.model("Board", BoardSchema)

module.exports = Board
