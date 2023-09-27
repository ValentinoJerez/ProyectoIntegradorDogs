// Tipo GET
// Importaciones
const {Dog} = require('../db')
const axios = require("axios")


const get = async () => {
        //Busco en BD
        const dogsDB = await Dog.findAll()
        //Busco en Api
        const response = await axios.get("https://api.thedogapi.com/v1/breeds")
        const dogsFromApi = response.data
        //Devuelvo ambos
        return dogsDB.concat(dogsFromApi);
}

module.exports = get;