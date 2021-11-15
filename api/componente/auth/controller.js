import { sign } from "../../../auth";
import { store } from "../../../store/dummy";
import { response } from "../../../network";
import  userModel  from "../user/model";

const USER_TABLE = "users";

/*----------POST----------*/
export const login = async (req, res) => {
    //destructuración
    const user = req.body;
    const payload = { 
      email: user.email,
      password: user.password,
    };
    const token =  await sign(payload);
  
    return response ({
      res,
      data: {user, token},
      status: 201
    });
  };
  
  export const signUp = async (req, res) => {
    const user = req.body;
    /*creamos el data del user nuevo */
    /**borramos id porque mongodb lo genera */
    const  data = { 
      name: user.name, 
      last_name: user.last_name, 
      email: user.email,
      password: user.password,
    };
    const users = await store(userModel, data);
    return response({ res, data: users, status: 201});
  };