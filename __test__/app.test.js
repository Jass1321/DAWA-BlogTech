import request from "supertest";
import { app } from "../api/app";
import { base_url } from "../config/config";

const bearer =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imphc3NAZ21haWwuY29tIiwicGFzc3dvcmQiOiJKNFpaNiIsImlhdCI6MTYzNDAzOTAzNn0.OmOrvKu0lROzqEP8bysnX7rYfsjijlgzS48M25QVOsk";

/**------------USER------------ */
// Ahora vamos a CREAR un USUARIO
describe("Creando usuario", () => {
  test("Metodo POST", async () => {
    const body = {
      name: "Jassyra Test",
      last_name: "Espinoza Test",
      email: "j4ss@gmail.com",
      password: "j4ss1r4"
    };

    const result = await request(app)
      .post(`${base_url}/auth/signup`)
      .send(body);

    expect(result.status).toBe(201);
    expect(result.ok).toBe(true);
  });
});

// Ahora vamos a INICIAR SESION un USUARIO
describe("Iniciar sesion de usuario", () => {
  test("Metodo POST", async () => {
    const body = {
      email: "j4ss@gmail.com",
      password: "j4ss1r4"
    };

    const result = await request(app)
      .post(`${base_url}/auth/login`)
      .send(body);

    expect(result.status).toBe(201);
    expect(result.ok).toBe(true);
  });
});

// Ahora test voy a LEER un USUARIO
describe("Lista de usuarios", () => {
  test("Metodo GET", async () => {
    const result = await request(app)
      .get(`${base_url}/user/show/USER02`)
      .set("Authorization", bearer);

    expect(result.status).toBe(200);
    expect(result.ok).toBe(true);
  });
});

// Ahora test voy a LISTAR a TODOS los USUARIOS
describe("Lista de todos usuarios", () => {
  test("Metodo GET", async () => {
    const result = await request(app)
      .get(`${base_url}/user/list`)
      .set("Authorization", bearer);

    expect(result.status).toBe(200);
    expect(result.ok).toBe(true);
  });
});

// Ahora vamos a ACTUALIZAR un USUARIO
describe("Actualización de usuario", () => {
  test("Metodo PUT", async () => {
    const body = {
      name: "Danna Test",
      last_name: "Vila Test",
      email: "d4nn4@gmail.com",
      password: "d4nn4"
    };
    const result = await request(app)
      .put(`${base_url}/user/update/USER02`)
      .set("Authorization", bearer)
      .send(body);


    expect(result.status).toBe(200);
    expect(result.ok).toBe(true);
  });
});   

// Ahora test voy a ELIMINAR un USUARIO 
describe("Eliminacion de un usuario", () => {
  test("Metodo DELETE", async () => {
    const result = await request(app)
      .delete(`${base_url}/user/delete/USER02`)
      .set("Authorization", bearer);

    expect(result.status).toBe(200);
    expect(result.ok).toBe(true);
  });
});

/**------------ STORY------------ */
// Ahora vamos a CREAR una HISTORIA
describe("Creacion historia by usuario", () => {
  test("Metodo POST", async () => {
    const body = {
      title: "DAKAR 2021",
      author: "FIFA",
      text: "ARGENTINA-PERU",
      dataTime: "2021-10-23",
      user_id: "USER01",
    }

    const result = await request(app)
      .post(`${base_url}/user/USER01/story/create`)
      .set("Authorization", bearer)
      .send(body);

    expect(result.status).toBe(201);
    expect(result.ok).toBe(true);
  });
});

// Ahora test voy a LEER una HISTORIA de un USUARIO
describe("Lista de una historia", () => {
  test("Metodo GET", async () => {
    const result = await request(app)
      .get(`${base_url}/user/USER01/story/read/H100`)
      .set("Authorization", bearer);

    expect(result.status).toBe(200);
    expect(result.ok).toBe(true);
  });
});

// Ahora test voy a los LEER a TODAS las HISTORIAS de un USUARIO
describe("Lista de todos las historias", () => {
  test("Metodo GET", async () => {
    const result = await request(app)
      .get(`${base_url}/story/list`)
      .set("Authorization", bearer);

    expect(result.status).toBe(200);
    expect(result.ok).toBe(true);
  });
});

// Ahora vamos a ACTUALIZAR una HISTORIA
describe("Actualización de una historia", () => {
  test("Metodo PUT", async () => {
    const body = {
      "title": "Historia 1",
      "author": "Jaime Gómez",
      "text": "Programar es un arte",
      "dataTime": "2012-04-23",
      "user_id": "USER01"
    };
    const result = await request(app)
      .put(`${base_url}/user/USER01/story/update/H100`)
      .set("Authorization", bearer)
      .send(body);
    expect(result.status).toBe(200);
    expect(result.ok).toBe(true);
  });
});   

// Ahora test voy a ELIMINAR una HISTORIA 
describe("Eliminacion de una historia", () => {
  test("Metodo DELETE", async () => {
    const result = await request(app)
      .delete(`${base_url}/user/USER02/story/delete/H200`)
      .set("Authorization", bearer);
    expect(result.status).toBe(200);
    expect(result.ok).toBe(true);
  });
});