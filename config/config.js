//? este config se encargara de exportar mis variables

export const base_url = "/api";

export const port = process.env.PORT || 6600;

export const secret = process.env.SECRET || "secret";

const mongo_local = "mongodb://192.168.1.3:27017/local";
const mongo_remote = "mongodb+srv://root:HCvGNnErj26OFkDJ@cluster0.xwxrh.mongodb.net/?retryWrites=true&w=majority";

export const db_url  = process.env.DB_URL || mongo_remote