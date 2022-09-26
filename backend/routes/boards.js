const express = require('express')
const router = express.Router()
const {
    deleteBoards,
    getBoards,
    addBoard,
    addColumn,
    editColumn,
    addTask,
    toggleCheck,
    editBoard,
    deleteBoard
} = require("../controllers/boards")


router.route("/").get(getBoards)  

router.route("/addboard").post(addBoard)  
router.route("/editboard").post(editBoard)
router.route("/deleteboard").post(deleteBoard)

router.route("/addcolumn").post(addColumn)
router.route("/editcolumn").post(editColumn)

router.route("/addtask").post(addTask)
router.route("/togglecheck").post(toggleCheck)
router.route("/deleteall").get(deleteBoards)  

module.exports = router
