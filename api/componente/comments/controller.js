import { response } from "../../../network";
import { store, list, find, remove, refresh } from "../../../store/dummy";
import  commentModel  from "./model";

/*----------POST----------*/
export const saveComment = async (req, res) => {
    const comment = req.body;
    /*creamos el data del user nuevo */
    const  data = { 
      text: comment.text,
      user_id: comment.user_id
    };
    const comments = await store(commentModel, data);
    return response({ res, data: comments, status: 201});
};

/*----------GET----------*/
export const getComments = async (req, res) => {
    return response({res, data: await list(commentModel)});
}

export const showComments = async (req, res) => {
    const {id} = req.params;
    const comment = await find({value: id, model: commentModel});
    
  if (!comment) {
    response({ res, ok: false, status: 404, data: "error, comment not found"
    });
}
    return response({res, data: comment});
};

/*----------UPDATE----------*/
export const updateComment = async (req, res) => {
    const {id} = req.params;
    const comment = await refresh({model: commentModel, id: id, data: req.body});
    if (!comment) {
        return response({ res,ok: false,status: 404,data: "error, comment not found"});
    }
    return response({res, data: comment});
};

/*----------DELETE----------*/
export const removeComment = async (req, res) => {
    const {id} = req.params;
    const comment = await remove(commentModel, id);
    if (!comment) {
        return response({res,status: 404,ok: false,data: {error: "error, comment not found"}
        });
    }
    return response({res, data: {success: "Comment deleted!"}});
};

