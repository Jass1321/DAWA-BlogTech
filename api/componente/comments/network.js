import express from "express";
import { getComments } from "./controller";

const commentRouter = express.Router();

commentRouter.route("/list").get(getComments);

export default commentRouter; 