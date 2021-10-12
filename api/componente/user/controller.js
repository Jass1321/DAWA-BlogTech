/**
 * * Login => Email, Password => POST
 * * SignUp => Name, Lastname, Email, Password => POST
 * * ShowUser => ID => Show => GET
 * * Reset password => Email => POST
 * * Update User => Id, UserData => PUT
 * * Delete user => Id => DELETE
 */

import { response } from "../../../network";

/*----------POST----------*/
export const login = (req, res) => {
  //destructuración
  const {email, password} = req.body;
  return response ({
    res,
    data: {email, password}
  });
};

export const signUp = (req, res) => {
  const { id, name, last_name, email, password } = req.body;
  return response({
    res,
    data: { id, name, last_name, email, password },
  });
};

export const resetPassword = (req, res) => {
  const { id, email, password } = req.body;
  return response({
    res,
    data: { email, password },
  });
};

/*----------GET----------*/
export const showUser = (req, res) => {
  const { id,  name, last_name  } = req.body;
  return response({
    res,
    data: { name, last_name },
  });
};

/*----------UPDATE----------*/
export const updateUser = (req, res) => {
  const { id, name, last_name, email, password  } = req.body;
  return response({
    res,
    data: { name, last_name, email, password },
  });
};

/*----------DELETE----------*/
export const deleteUser = (req, res) => {
  const { id } = req.body;
  return response({
    res,
    data: { id },
  });
};