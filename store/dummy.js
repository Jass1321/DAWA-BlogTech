
import {  Model } from "mongoose";
/**
 * Se encarga de listar los datos en base al modelo que recibe (es una Promesa)
 * @param {Model} model
 * @returns {Array} Datos encontrados
 */
 export const list = async (model) => await model.find();

/**
 * 
 * @param {any} model 
 * @param {Array<any>} data 
 * @returns 
 */

export const store = async (model, data) => {
    const object = new model(data);
    object.save();
};

export const find = async (model, key, value) => {
    const data = model.findOne({ key: value });
    return data;
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

      