const fs = require("fs")
const {storageModel} = require('../models')
const {handleHttpError} = require("../utils/handleError")
const {matchedData} = require("express-validator");


const PUBLIC_URL  = process.env.PUBLIC_URL;
const MEDIA_PATH  = `${__dirname}/../storage`;


/**
 * obtener lista base de datos
 * @param {*} req 
 * @param {*} res 
 */


const getItems =  async (req,res) => {

    try {
        const data = await storageModel.find({});
        res.send({data});
    } catch (e) {
        handleHttpError(res,"Cargar un Item")
    }

};

/**
 * Obtenet un detalle
 * @param {*} req 
 * @param {*} res 
 */

const getItem = async (req,res) => {

    try {
        const  {id} = matchedData(req);
        const data = await storageModel.findById(id);
        res.send({data});
    } catch (e) {
        handleHttpError(res,"Cargar un Item")
    }

};

/**
 * Insertar un registro
 * @param {*} req 
 * @param {*} res 
 */

const createItem = async (req,res) => {
    
    try {
        const {body,file} = req
        console.log(file);
        const fileData = {
            filename: file.filename,
            url: `${PUBLIC_URL}/${file.filename}`
    
        }
        const data = await storageModel.create(fileData)
        res.send({data})
    } catch (e) {
        handleHttpError(res,"Crear un Item")
    }

   

};

/**
 * Eliminar un registro
 * @param {*} req 
 * @param {*} res 
 */

const deleteItem = async (req,res) => {

    try {
        const  {id} = matchedData(req);
        const dataFile = await storageModel.findById(id);
        await storageModel.delete({_id:id});
        const {filename} = dataFile;
        const filepath = `${MEDIA_PATH}/${filename}`
        //fs.unlinkSync(filepath);
        const data = {
            filepath,
            deleted:1
        }
        res.send({data});
    } catch (e) {
        handleHttpError(res,"Eliminar un Item")
    }

};

module.exports = {getItems,getItem,createItem,deleteItem} ; 