const express = require('express')
const router = express.Router()
const {getBoards} = require("../controllers/boards")
const {deleteBoards} = require("../controllers/boards")

router.route("/").get(getBoards)  
router.route("/deleteall").get(deleteBoards)  

module.exports = router
