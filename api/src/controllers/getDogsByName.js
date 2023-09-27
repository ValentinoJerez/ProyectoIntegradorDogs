//Import 
const {Dog} = require("../db")
const axios = require("axios")

const getDogsName = async (name) => {
          //Recibo name:
          //Busco BD
          const dogFromDB = await Dog.findAll({where: {name: name}})
          //Busco Api
          const response = await axios.get(`https://api.thedogapi.com/v1/breeds/search?q=${name}`) 
          //Destructuring
          const dogFromApi = response.data 
          //Devuelvo ambas
          return dogFromDB.concat(dogFromApi);

}

module.exports = getDogsName;