import express from "express"
import generate_handlers from "../handlers/handler"

const router = express.Router();
const handler = generate_handlers();

// Route for user repositories
router.post("/user_repos", handler.user_repos)

export default router