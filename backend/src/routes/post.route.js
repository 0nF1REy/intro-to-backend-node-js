import { Router } from "express";
import { createPost, getPosts } from "../controllers/post.controller.js";

const router = Router();

router.post("/create", createPost);
router.get("/getPosts", getPosts);

export default router;
