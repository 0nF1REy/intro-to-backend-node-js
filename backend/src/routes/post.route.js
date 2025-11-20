import { Router } from "express";
import { createPost, getPosts, updatePost } from "../controllers/post.controller.js";

const router = Router();

router.post("/create", createPost);
router.get("/getPosts", getPosts);
router.patch("/update/:id", updatePost);

export default router;
