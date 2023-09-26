// Tipo GET
Importaciones
const {Dog} = require('../db')
const axios = require("axios")


const getDogs = async () => {
    try {
        const response = await axios.get("https://api.thedogapi.com/v1/breeds")
        return response.data;
    } catch (error) {
        throw new Error("Error")
    }
}

module.exports = getDogs;