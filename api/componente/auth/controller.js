import { sign } from "../../../auth";
import { store, findLogin } from "../../../store/dummy";
import { response } from "../../../network";
import  userModel  from "../user/model";
import { hash, compare } from "../../../helper/encrypt";

/*----------POST----------*/
export const login = async (req, res) => {
    //destructuración
    const user = req.body;
    const payload = { 
      email: user.email,
      password: user.password,
    };

    const token =  await sign(payload);

    //? primer  buscar a mi usario
    const userData = await findLogin(userModel, "email", user.email);
    //? luego ver si existe
    if (!userData) return;
    //? y comparo la contra
    const validate = compare(user.password, userData.password);

    if (!validate) {
      return response({
        res,
        ok: false,
        status: 500,
        data: {
          message: "User invalid",
        },
      });
    }

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
      password: hash(user.password)
    };
    const users = await store(userModel, data);
    return response({ res, data: users, status: 201});
  };