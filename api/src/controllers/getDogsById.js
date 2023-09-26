// Tipo GET
//Importaciones
const {Dog} = require("../db")
const axios = require("axios")

const getDogsId = async (idRaza) => {
    //BUsco BD
    const dogFromDB = await Dog.findAll({where: {name: idRaza}})
    //Busco Api
    const response = await axios.get(`https://api.thedogapi.com/v1/breeds/search?q=${idRaza}`) 
    const dogFromApi = response.data //Destructuring
    //DEVUELVO AMBAS
    return dogFromDB.concat(dogFromApi);
}

module.exports = getDogsId