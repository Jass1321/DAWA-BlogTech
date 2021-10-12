import express from "express";
import {deleteUser, login, resetPassword, showUser, signUp, updateUser} from './controller';

/* networks es que exporta las rutas*/ 
const userRouter = express.Router();

userRouter.route("/login").post(login);
userRouter.route("/signup").post(signUp);
userRouter.route("/reset/:id").post(resetPassword);
userRouter.route("/read/:id").get(showUser);
userRouter.route("/update/:id").put(updateUser);
userRouter.route("/delete/:id").delete(deleteUser);
export default userRouter;
