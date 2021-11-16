import {  Model } from "mongoose";

/**
 * Listar los datos en base al modelo que recibe 
 * @param {Model} model
 * @returns {Array} 
 */
//^cuando es inline return esta implicito
export const list = async (model) => await model.find();

/**
 * Guardar info
 * @param {Model} model 
 * @param {Array<any>} data 
 * @returns 
 */
export const store = async (model, data) => {
    const object = new model(data);
    object.save();
};

//*para el login 
export const findLogin = async (model, key, value) => {
    const data = model.findOne({ key: value });
    return data;
};


/**
 * Buscar un usuario ya sea por id o cualquier param
 * @param {{model: Model, key: string, value: string}} parametros
 */

 export const find = async ({model, key = "_id", value}) => {
    try {
        const data = await model.findOne({[`${key}`]: value});
        return data;
    } catch (error) {
        return false;
    }
};

/**
 * Funcion para actualizar
 * @param {{model: Model, id: string, data: Array}} parametros
 * @returns {Array?}
 */

export const refresh = async ({model, id, data}) => {
    try {
        //data es un objeto que tiene las columnas del modelo
        await model.findByIdAndUpdate(id, data);
        return await list(model);

    } catch (error) {
        return false;
    }
};

/**
    * Funcion para eliminar datos
    * @param {Model} model
    * @param {String} id
    */

export const remove = async (model, id) => {
    try {
        await model.findByIdAndRemove(id);
        //retorna la lista del modelo
        return await list(model);
    } catch (err) {
        return false;
    }

};

      