
import mongoose from "mongoose";
/**
 * id, comment, author
 */
//2° definir los datos 
//* ojito por default mongo le pone un id ******

 const commentSchema = new mongoose.Schema({
    comment: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    }
  });

const commentModel = mongoose.model("comments", commentSchema);

export default commentModel;
