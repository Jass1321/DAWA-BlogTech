import express from "express";
import { getComments, showComments, updateComment, removeComment } from "./controller";

const commentRouter = express.Router();

commentRouter.route("/list").get(getComments);
commentRouter.route("/:id").get(showComments);
commentRouter.route("/update/:id").put(updateComment);
commentRouter.route("/delete/:id").delete(removeComment);

export default commentRouter; 