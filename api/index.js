import express from "express";
import userRouter from "./componente/user";
import storyRouter from "./componente/story";
import authRouter from "./componente/auth";
import { port, base_url } from "../config/config";
import { checkToken } from "../auth";
//import router from "./router";
//const express = require('express');

const app = express();

//? esto sirve paa poder leer el body
app.use(express.json());
app.use(express.urlencoded({extended: true }));

app.use(`${base_url}/auth`, authRouter);
app.use(`${base_url}/user`, checkToken, userRouter);
app.use(`${base_url}/user/:user_id/story`,checkToken, storyRouter);
app.use(`${base_url}/story`,checkToken, storyRouter);

app.listen(port, () => 
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