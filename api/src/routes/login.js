import  express  from "express";
import { getAllUser } from "../controller/logincontroller";
const router = express.Router()

router.get('/',getAllUser)

module.exports = router;