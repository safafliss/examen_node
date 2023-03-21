var express= require("express")
var router=express.Router()
//var msgService = require("../service/service")
var { addMsg, list, modiflikes, deleteMsg, modifMsg } = require("../service/service")


router.post("/addMsg", addMsg)
router.get ("/list", list)
router.put("/likes/:id", modiflikes)
router.delete("/deleteId/:id", deleteMsg)
router.put("/update/:id", modifMsg)

module.exports = router