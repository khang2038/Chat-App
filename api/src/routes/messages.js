const router=require("express").Router();
const { addmessages, getmessages } = require("../controller/messagescontroller");
const Message = require("../model/message");


router.post("/",addmessages)

router.get("/:conversationId",getmessages)


module.exports = router