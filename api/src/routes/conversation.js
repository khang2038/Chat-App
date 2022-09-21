const router=require("express").Router();
const { addconversation, getConversationOfUser, getConvIncludesTwoUserId } = require("../controller/conversationcontroller");
const Conversation=require("../model/conversation");

router.post("/",addconversation)
router.get("/:userId",getConversationOfUser )
router.get("/find/:firstUserId/:secondUserId",getConvIncludesTwoUserId)

module.exports = router