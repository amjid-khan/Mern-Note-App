import express from "express"
import { handleUSer } from "../controlles/controlles.js"
const router = express.Router()

router.post("/register", handleUSer)


export default router