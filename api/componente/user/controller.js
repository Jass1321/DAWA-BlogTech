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

const USER_TABLE = "users";

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
  const user = await find(USER_TABLE, id);
  return response({ res, data:  user  });
};

//LISTA DE USUARIOS
export const showAll = async (req, res) => {
  //aca traigo la lista de usuarios
  const users = await list(USER_TABLE);

  return response({res, data: users});
};

/*----------UPDATE----------*/
export const updateUser = async (req, res) => {
  const { id } = req.params;
  const user = req.body;
  const  awa = { 
    name: user.name, 
    last_name: user.last_name, 
    email: user.email,
    password: user.password,
  };
  const users = await refresh(USER_TABLE, id);
  if (!users) {
    return response({ res, ok: false, data: { error: "User not found" } });
  }
  return response({ res, data:  awa });
};

/*----------DELETE----------*/
export const deleteUser = async (req, res) => {
  const { id } = req.params;
  const user = await remove(USER_TABLE, id);
  if (!user) {
    return response({ res, ok: false, data: { error: "User not found" } });
  }

  return response({ res, data: { success: "User deleted successfully!" } });
}; 
