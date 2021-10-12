//local storage
const db = {
    user: [
        {
            id:1,
            name: "Jassyra",
            last_name: "Espinoza",
            email: "jass1321@gmail.com",
            password: "niall66",
        },
    ],
};

//Aqui vamos a poner las ope basicas - CRUD

//*todo esto debe cpn asynce await
export const list = async (table) => {
    return await db[table];
};

export const store = async (table, data) => {
    //*Creo un dato y retorno la lista completa
    await db[table].push(data);
    return await list(table);
}