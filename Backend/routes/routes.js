import express from "express"
import { getAllNotes, handleLogin, handleNots, handleUSer } from "../controlles/controlles.js"
const router = express.Router()

router.post("/register", handleUSer)
router.post("/login", handleLogin)
router.post("/notes", handleNots)
router.get("/notes", getAllNotes)
export default router