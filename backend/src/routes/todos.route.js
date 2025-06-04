import express from "express";
import { getTodos, createTodo, deleteTodo, updateTodo } from "../controllers/todo.controller.js";
import { protectRoute } from "../middleware/authMid.js";

const router = express.Router();

router.get("/",protectRoute, getTodos);
router.post("/",protectRoute, createTodo);
router.delete("/:id",protectRoute, deleteTodo);
router.put("/:id",protectRoute, updateTodo);

export default router;