import express from "express"
import generate_handlers from "../handlers/handler"

const router = express.Router();

// Route for user repositories
router.post("/user_repos", generate_handlers().user_repos)

export default router