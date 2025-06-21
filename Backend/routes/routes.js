import express from "express"
import { getAllNotes, handleDelete, handleEdit, handleLogin, handleNots, handleUSer } from "../controlles/controlles.js"
const router = express.Router()

router.post("/register", handleUSer)
router.post("/login", handleLogin)
router.post("/notes", handleNots)
router.get("/notes", getAllNotes)
router.delete("/notes/:id", handleDelete)
router.put("/notes/:id", handleEdit)
export default router