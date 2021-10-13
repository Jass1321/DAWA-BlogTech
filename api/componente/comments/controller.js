import { response } from "../../../network";
import { nanoid } from "nanoid";
import { store, list } from "../../../store/dummy";

export const getComments = async (req, res) => {
    const comments = await list("comments");

    response({res, data: comments});
}

export const saveComment = async (body) => {
    //? tengo que modificar para agregar un ID
    body.id = nanoid();

    await store("comments", body);
    return {
        ok: true,
        message: body,
      };
};