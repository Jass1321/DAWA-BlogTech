/**
 * * Login => Email, Password => POST
 * * SignUp => Name, Lastname, Email, Password => POST
 * * ShowUser => ID => Show => GET
 * * Reset password => Email => POST
 * * Update User => Id, UserData => PUT
 * * Delete user => Id => DELETE
 */

import { response } from "../../../network";
import { list, find, remove, refresh } from "../../../store/dummy";
import userModel from "./model";


/*----------POST----------*/
export const resetPassword = (req, res) => {
  const { id, email, password } = req.body;
  return response({
    res,
    data: { email, password },
  });
};

/*----------GET----------*/
export const showUser = async (req, res) => {
  const { id } = req.params;
  const user = await find({ value: id, model: userModel });
  if (!user) {
    response({res, ok: false, data: { error : "error data nor found"}, status: 500});
  }
  return response({ res, data:  user  });
};

//LISTA DE USUARIOS
export const showAll = async (req, res) => {
  response({res, data: await list(userModel)});
};

/*----------UPDATE----------*/
export const updateUser = async (req, res) => {
  const { id } = req.params;
  const users = await refresh({ model: userModel, id, data: req.body });
  if (!users) { 
    return response({
      res, ok: false, data: { error : "error data nor found"}, status: 500
    });
  }
  return response({ res, data:  users });
};

/*----------DELETE----------*/
export const deleteUser = async (req, res) => {
  const { id } = req.params;
  const user = await remove(userModel, id);
  if (!user) {
    return response({ 
      res, ok: false, data: { error: "User not found" } , status: 500
    });
  }
  return response({ res, data: { success: "User deleted successfully!" }});
}; 
