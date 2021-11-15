// contiene la estructura de datos de los usuarios
//1° importar mongoose
import mongoose from "mongoose";
/**
 * id, name, last_name, email. password
 */
//2° definir los datos 
//* ojito por default mongo le pone un id ******

 const userSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  });

const userModel = mongoose.model("users", userSchema);

export default userModel;
