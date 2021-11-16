import express from "express";
import { checkToken } from "../../../auth";
import {deleteUser, resetPassword, showAll, showUser, updateUser} from './controller';

/* networks es que exporta las rutas*/ 
const userRouter = express.Router();

/* 1° FORMA DE USAR
//Lo que debo proteger es lo sgt
//?para poder proteger mi ruta debo usar all()
userRouter.route("/show/:id").all(checkToken).get(showUser);
 */

userRouter.route("/reset/:id").post(resetPassword);
userRouter.route("/show/:id").get(showUser);
userRouter.route("/update/:id").put(updateUser);
userRouter.route("/delete/:id").delete(deleteUser);
userRouter.route("/").get(showAll); 

//? Usamos export default cuando solamente hay una cosa que exportar
export default userRouter;

