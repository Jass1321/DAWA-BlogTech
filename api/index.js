import express from "express";
import userRouter from "./componente/user";
import storyRouter from "./componente/story";
import authRouter from "./componente/auth";
import { port, base_url } from "../config/config";
import { checkToken } from "../auth";
import { Server as WebSocketServer } from "socket.io";
import http from "http";
//import router from "./router";
//const express = require('express');

const app = express();
const server = http.createServer(app);
const io = new WebSocketServer(server);

//* Cargando la carpeta public
//console.log("dirname", __dirname);
//dirname D:\DAWA\blogTech\api
app.use(express.static(__dirname + "/public"));

//* Cargando la carpeta public
app.use(express.static(__dirname + "/public"));

/**
 * gracias a la palabra connection el servidor se prepara  la conexion entre mi cliente y servidor
 * para poder escuchar e imitir eventos 
 * socket => Es la info que viene de mi navegador web(client)
 */
io.on("connection", (socket) => {

  //console.log(`new connection ${socket}`);
  //console.log(socket);
  console.log(`new connection`);

  //*como se que la conexion con mi cliente ya esta puede empezar a escuchar y a emitir eventos
  //hello:peter es la palabra clave  que me envia el cliente
  //message es la info que recivo del cliente
  /**
   * params {string} : keyword
   * params {function} : Info from client
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

 // socket.emit(new:)
});

//? esto sirve paa poder leer el body
app.use(express.json());
app.use(express.urlencoded({extended: true }));

app.use(`${base_url}/auth`, authRouter);
app.use(`${base_url}/user`, checkToken, userRouter);
app.use(`${base_url}/user/:user_id/story`,checkToken, storyRouter);
app.use(`${base_url}/story`,checkToken, storyRouter);

server.listen(port, () => 
  console.log(`listening on port http://localhost:${port}`)
);


/*
app.use(userRouter); 
ó
app.get("/", (req, res) => {
    res.status(200).json({
      status: 200,
      message: "Hola mundo",
    });
  });
  
*/