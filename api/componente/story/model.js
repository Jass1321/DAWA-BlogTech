// contiene la estructura de datos de los usuarios
//1° importar mongoose
import mongoose from "mongoose";
/**
 * id, title, author, text. dataTime, user_id
 */
//2° definir los datos 
//* ojito por default mongo le pone un id ******

 const storySchema = new mongoose.Schema({
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    dataTime: {
      type: String,
      required: true,
    },
    user_id: {
        type: String,
        required: true,
      },
  });

const storyModel = mongoose.model("stories", storySchema);

export default storyModel;
