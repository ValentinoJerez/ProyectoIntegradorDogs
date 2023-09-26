// Tipo GET
Importaciones
const {Dog} = require('../db')
const axios = require("axios")


const get = async () => {
        const response = await axios.get("https://api.thedogapi.com/v1/breeds")
        return response.data;
}

module.exports = get;