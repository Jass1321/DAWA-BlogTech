import express from "express";
import userRouter from "./componente/user";
import storyRouter from "./componente/story";
import router from "./router";
//const express = require('express');

const app = express();

//? esto sirve paa poder leer el body
app.use(express.json());
app.use(express.urlencoded({extended: true }));

app.use("/api/user", userRouter);
app.use("/api/user/:user_id/story", storyRouter);

app.listen(6600);


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