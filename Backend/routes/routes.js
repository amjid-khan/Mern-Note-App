import express from "express"
import { handleLogin, handleUSer } from "../controlles/controlles.js"
const router = express.Router()

router.post("/register", handleUSer)
router.post("/login", handleLogin)


export default router