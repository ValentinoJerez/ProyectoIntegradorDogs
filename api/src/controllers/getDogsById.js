// Tipo GET
//Importaciones
const {Dog} = require("../db")
const axios = require("axios")

const getDogsId = async (id) => {
    //Busco BD
    const dogFromDB = await Dog.findAll({where: {name: id}})
    //Busco Api
    const response = await axios.get(`https://api.thedogapi.com/v1/breeds/${id}`) 
    const dogFromApi = response.data //Destructuring
    //Devuelvo ambos
    return dogFromDB.concat(dogFromApi);
}

module.exports = getDogsId