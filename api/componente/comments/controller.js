import { response } from "../../../network";
import { nanoid } from "nanoid";
import { store, list } from "../../../store/dummy";
import  commentModel  from "./model";

export const getComments = async (req, res) => {
    const comments = await list(commentModel);

    response({res, data: comments});
}

export const saveComment = async (body) => {
    const comment = await store(commentModel, body);
    return {
        ok: true,
        message: comment,
      };
};