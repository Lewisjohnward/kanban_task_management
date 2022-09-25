const Board = require("../models/Board")

const data = {
        board: "stuff",
        columns: [
            {
                column: "todo",
                color: "#f76707",
                tasks: [
                    {
                        task: {
                            name: "build ui",
                            subtasks: [
                                {
                                    subtask: "procrastinate",
                                    completed: false
                                },
                                {
                                    subtask: "kik dog",
                                    completed: false
                                }
                            ]
                        }
                    },
                    {
                        task: {
                            name: "test this ting!",
                            subtasks: [
                                {
                                    subtask: "procrastinate",
                                    completed: false
                                },
                                {
                                    subtask: "kik dog",
                                    completed: false
                                }
                            ]
                        }

                    }
                ]
            }
        ]
    }


exports.getBoards = async (req, res, next) => {
    const username = "lewis"

    try {
        const newBoard = await Board.create({
            username,
            board: "stuff",
            columns: [
                {
                    name: "todo",
                    color: "#f76707",
                    tasks: [
                        {
                            name: "build ui",
                            subtasks: [
                                {
                                    subtask: "procrastinate",
                                    completed: false
                                }
                            ]
                        }
                    ]
                }
            ]

        })
    } catch(error){
        console.log(error)
    }

    const board = await Board.find()

    console.log(board)
    res.send(board)

}


exports.deleteBoards = async (req, res, next) => {

    try{
        const deleted = await Board.deleteMany()
    } catch(error){
        console.log(error)
    }
    console.log("deleted")

    res.send("deleted all")

}
