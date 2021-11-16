import express from "express";

import userRouter from "./componente/user";
import storyRouter from "./componente/story";
import authRouter from "./componente/auth";
import commentRouter  from "./componente/comments";

import { saveComment } from "./componente/comments/controller";
import { base_url , db_url} from "../config/config";
import { checkToken } from "../auth";
import { Server as WebSocketServer } from "socket.io";
import http from "http";

//import db
import connect  from "../db";

// Se encargar cargar todas las dependencias, rutas, en si todo la aplicacion
export const app = express();
export const server = http.createServer(app);
export const io = new WebSocketServer(server);

// connect recibe la url de conexion
connect(db_url);

//* Cargando la carpeta public
app.use(express.static(__dirname + "/public"));

io.on("connection", (socket) => {

  console.log(`new connection`);

  /**
   * params {string} : keyword | hello:peter es la palabra clave  que me envia el cliente
   * params {function} : Info from client | message, es la info que recibo del cliente
   */
   
  // * on => Es el encargado de recivir enventos
  socket.on("hello:petter", (message) => {
    console.log(`el Doctor optopus ${message}`);

    //*aca le digo que emita un evento
    socket.emit(
      "bye:petter",
      "un gran poder conlleva una gran responsabilidad"
      );
  })

  //? Evento para guardar comentarios 
  // * Recibe el comentario desde el cliente y ademas lo guarda
  socket.on("new:comment", async (body) => {
    const res = await saveComment(body);
    //* Una vez que se guardo el comentario le response al cliente que todo ok
    socket.emit("save:comment", res);
  });
});

//? esto sirve paa poder leer el body
app.use(express.json());
app.use(express.urlencoded({extended: true }));

app.use(`${base_url}/auth`, authRouter);
app.use(`${base_url}/user`, checkToken, userRouter);
app.use(`${base_url}/user/:user_id/story`,checkToken, storyRouter);
app.use(`${base_url}/comment`, commentRouter);
