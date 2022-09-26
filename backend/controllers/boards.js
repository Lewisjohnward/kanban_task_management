const Board = require("../models/Board")



//GET BOARDS
exports.getBoards = async (req, res, next) => {
    const {username} = req.body

    try {
        const board = await Board.find({username})
        res.send(board)
    } catch(error){
        console.log(error)
    }
}


//ADD BOARD
exports.addBoard = async (req, res, next) => {
    const {username} = req.body
    const {board} = req.body

    try {
        const newBoard = await Board.create({
            username,
            board 
        })
        res.send(newBoard)
    } catch(error){
        console.log(error)
    }
}

//EDIT BOARD NAME
exports.editBoard = async (req, res, next) => {
    const {username} = req.body
    const {board} = req.body
    const {newName} = req.body

    try {
        const editedBoard = await Board.findOneAndUpdate(
            {username, board},
            {board: newName},
            {new: true}
        )
        
        res.json(editedBoard)
    } catch (error){
        console.log(error)
    }
}

//DELETE BOARD
exports.deleteBoard = async (req, res, next) => {
    const {username} = req.body
    const {board} = req.body

    try {
        const deletedBoard = await Board.findOneAndDelete({username, board})

        res.json({delete: "success", deletedBoard})
    } catch (error) {
        console.log(error)
    }
}

//ADD COLUMN
exports.addColumn = async (req, res, next) => {
    const {username} = req.body
    const {board} = req.body
    const {column} = req.body

    try {
        const updatedBoard = await Board.findOneAndUpdate(
            {username, board}, 
            {$push: {"columns" : {name: column, color: "black"}}},
            {new: true}
        )

        res.send(updatedBoard)


    } catch(error){
        console.log(error)
    }
}

//EDIT COLUMN

exports.editColumn = async (req, res, next) => {
    const {username} = req.body
    const {board} = req.body
    const {column} = req.body
    const {newColumnName} = req.body

    try {
        const updatedBoard = await Board.findOneAndUpdate(
            {username, board, columns: {$elemMatch: {name: column}}},
            {$set: {"columns.$.name": newColumnName}},
            {new: true}
        )

        res.send(updatedBoard)


    } catch(error){
        console.log(error)
    }
}
//DELETE COLUMN

exports.addTask = async (req, res, next) => {
    const {username} = req.body
    const {board} = req.body
    const {column} = req.body
    const {name} = req.body


    try {
        //const foundBoard = await Board.find(
        //    {username, board, columns: {$elemMatch: {name: column}}}
        //)
        const updatedBoard = await Board.findOneAndUpdate(
            {username, board, columns: {$elemMatch: {name: column}}},
            {$push: {"columns.$.tasks": 
                {name, subtasks: [
                    {
                        subtask: "kick dog",
                        completed: false
                    }
                ]}
            }},
            {new: true}
        )
        res.send(updatedBoard)
    } catch(error){
        console.log(error)
    }
}

//EDIT TASK
//DELETE TASK

//Delete subtask
//edit subtask
exports.toggleCheck = async (req, res, next) => {
    const {username} = req.body
    const {board} = req.body
    const {column} = req.body
    const {name} = req.body
    const {subtask} = req.body
    const {bool} = req.body


    try {
        const updatedBoard = await Board.findOneAndUpdate(
            {username, board, columns: {$elemMatch: {name: column}}},
            {$set: {"columns.$.tasks": 
                {name, subtasks: [
                    {
                        subtask,
                        completed: bool
                    }
                ]}
            }},
            {new: true}
        )
        res.send(updatedBoard)
    } catch(error){
        console.log(error)
    }
}

//EDIT SUBTASKS
//DELETE SUBTASKS


exports.deleteBoards = async (req, res, next) => {

    try{
        const deleted = await Board.deleteMany()
    } catch(error){
        console.log(error)
    }
    console.log("deleted")

    res.send("deleted all")

}
