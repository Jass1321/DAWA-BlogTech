import mongoose from "mongoose";

//*para que moongose sea scope global
mongoose.Promise = global.Promise;

//? como parametro recibe URL
/**
 * 
 * @param {string} url 
 */
//*funcion que sirve para conectar a la bd-v6
const connect = async (url) => {
    mongoose.connect(url);
    console.log("[db] connected");
};

export default connect;

/**Moongose v7>>>>
 * const connect = async (url) => {
    mongoose.connect(url, {
        userNewUrlParser: true,
    });

    console.log("[db] connected");
};
 */
