import express from "express";
import { getComments, showComments, updateComment, removeComment, saveComment } from "./controller";

const commentRouter = express.Router();

commentRouter.route("/").get(getComments);
commentRouter.route("/create").post(saveComment);
commentRouter.route("/:id").get(showComments);
commentRouter.route("/update/:id").put(updateComment);
commentRouter.route("/delete/:id").delete(removeComment);

export default commentRouter; 