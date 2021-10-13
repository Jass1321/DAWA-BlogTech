//local storage
const db = {
    users: [
        {
            //debe ser texto para que no compare con un numero
            id:"USER01",
            name: "Jassyra",
            last_name: "Espinoza",
            email: "jass1321@gmail.com",
            password: "J4SS",
        },
        {
            id: "USER02",
            name: "Kiara",
            last_name: "Pinedo",
            email: "kiara5678@gmail.com",
            password: "K14R4",
        },
    ],
    stories: [
        {
            id: "H100",
            title: "Historia 1",
            author: "Jaime Gómez",
            text: "Programar es un arte",
            dataTime: "2012-04-23",
            user_id: "USER01",
        },
        {
            id: "H200",
            title: "Historia 2",
            author: "Linder Hassinger",
            text: "Okei chicos chicas xd",
            dataTime: "2021-10-23",
            user_id: "USER02",
        },
    ],
    comments: [
        {
            id: "lana",
            comment: "leviosa",
            author: "kkaka",
        }
    ]
};

//Aqui vamos a poner las ope basicas - CRUD
//*todo esto debe ser con asynce await
export const list = async (table) => {
    return await db[table];
};

export const store = async (table, data) => {
    //*Creo un dato y retorno la lista completa
    await db[table].push(data);
    return await list(table);
};

export const find = async (table, id) => {
    //? Primero obtengo la lista de datos
    const dataList = await list(table);
    //? Buscar por id
    return  dataList.find((data) => data.id === id);
};

export const refresh = async (table, id) => {
    const dataList = await list(table);
    return  dataList.find((data) => data.id === id);
}

export const remove = async (table, id) => {
    const dataList = await list(table);
    //* primero debemos encontrar el indice
    const index = dataList.findIndex((data) => data.id === id);

    if (index === -1) {
        return false;
    }
    await db[table].splice(index, 1);
    return true;
};

      