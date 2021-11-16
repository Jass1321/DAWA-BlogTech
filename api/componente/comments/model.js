
import mongoose from "mongoose";
/**
 * comment, author-> user_id
 */
//2° definir los datos 
//* ojito por default mongo le pone un id ******

 const commentSchema = new mongoose.Schema({
    text: {
      type: String,
      required: true,
    },
    user_id: { type: String }
  });

const commentModel = mongoose.model("comments", commentSchema);

export default commentModel;
